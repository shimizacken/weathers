import React from 'react';
import cx from 'classnames';
import sun from '../../../../assets/wf-logo.png';
import styles from './Logo.module.scss';

export const LogoWrapper: React.FC<React.PropsWithChildren> = ({children}) => (
    <div className={styles.mainWrapper}>{children}</div>
);

export const Logo: React.FC<{className?: string}> = ({className}) => (
    <img
        className={cx(styles.logo, className)}
        src={sun}
        alt="Site logo"
        title="Weathers"
        width={150}
    />
);
