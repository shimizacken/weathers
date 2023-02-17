import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC<{
    start?: React.ReactNode;
    middle?: React.ReactNode;
    end?: React.ReactNode;
}> = ({start, middle, end}) => (
    <header className={styles.header}>
        <section className={styles.section}>{start}</section>
        <section className={styles.section}>{middle}</section>
        <section className={styles.section}>{end}</section>
    </header>
);
