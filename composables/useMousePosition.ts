type Position = {
    x: number;
    y: number;
}

export const useMousePosition = () => {
    const position = ref<Position | null>(null);

    const onMouseMove = (e: MouseEvent) => {
        position.value = {
            x: e.pageX,
            y: e.pageY
        };
    };

    onMounted(() => {
        window.addEventListener('mousemove', onMouseMove);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', onMouseMove);
    });

    return position;
}