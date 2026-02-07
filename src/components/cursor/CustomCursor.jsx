import React from 'react';
import useCursor from '../../hooks/useCursor';
import './cursor.css';

const CustomCursor = () => {
    const { position, hovered } = useCursor();

    return (
        <>
            <div
                className={`custom-cursor ${hovered ? 'hovered' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className="custom-cursor-dot"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
