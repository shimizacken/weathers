import React from 'react';

export const Header: React.FC<{
    start?: React.ReactNode;
    middle?: React.ReactNode;
    end?: React.ReactNode;
}> = ({start, middle, end}) => (
    <header>
        <section>{start}</section>
        <section>{middle}</section>
        <section>{end}</section>
    </header>
);
