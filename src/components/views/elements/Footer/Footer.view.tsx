import React from 'react';

export const Footer: React.FC<{
    start?: React.ReactNode;
    middle?: React.ReactNode;
    end?: React.ReactNode;
}> = ({start, middle, end}) => (
    <footer>
        <section>{start}</section>
        <section>{middle}</section>
        <section>{end}</section>
    </footer>
);
