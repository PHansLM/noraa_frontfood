// ImgConstructor.tsx

import React from 'react';

interface ImgConstructorProps {
    imgBytea: string;
    style?: React.CSSProperties;
    className?: string;
}

const ImgConstructor: React.FC<ImgConstructorProps> = ({ imgBytea, style, className }) => {
    const construirUrlImagen = (imgBytea: string) => {
        const arrayBuffer = Buffer.from(imgBytea, 'base64').buffer;
        const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
        return URL.createObjectURL(blob);
    };

    return (
        <img
            src={construirUrlImagen(imgBytea)}
            style={{ ...style, maxWidth: '135px', maxHeight: '135px' }}
            className={className}
        />
    );
};

export default ImgConstructor;