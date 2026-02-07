import { useState, useEffect } from 'react';

const useCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.interactive') || e.target.closest('a') || e.target.closest('button')) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return { position, hovered };
};

export default useCursor;
