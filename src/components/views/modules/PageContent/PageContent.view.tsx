import React from 'react';
import styles from './PageContent.module.scss';

export const PageContent: React.FC<React.PropsWithChildren> = ({children}) => (
    <article className={styles.wrapper}>{children}</article>
);
