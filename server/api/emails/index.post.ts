import { Resend } from 'resend';
import {earlyAccessHTML} from "~/templates/early-access";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
    const { email, captcha } = await readBody(event);

    const response = await verifyTurnstileToken(captcha);

    if (!response.success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid captcha',
        });
    }

    if (!email) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email address required',
        });
    }

    const { error: sendEmailError } = await resend.emails.send({
        from: 'Mivory <welcome@mivory.app>',
        to: email,
        subject: 'Welcome to Mivory!',
        html: earlyAccessHTML,
    });

    if (sendEmailError) {
        throw createError({
            statusCode: 500,
            statusMessage: sendEmailError.message,
        });
    }

    const { error: createContactError } = await resend.contacts.create({
        email: email,
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    if (createContactError) {
        throw createError({
            statusCode: 500,
            statusMessage: createContactError.message,
        });
    }

    return true;
});
