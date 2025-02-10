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

    const { error } = await resend.emails.send({
        from: 'Mivory <welcome@mivory.app>',
        to: email,
        subject: 'Welcome to Mivory!',
        html: earlyAccessHTML,
        headers: {
            'List-Unsubscribe': '<https://example.com/unsubscribe>',
        },
    });

    if (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Something went wrong',
        });
    }

    return true;
});
