import React from 'react';

export const Text: React.FC<{text?: React.ReactNode; className?: string}> = ({
    text,
    className,
    ...props
}) => (
    <span className={className} {...props}>
        {text}
    </span>
);
