import React from 'react';
import sun from '../../../../assets/wf-logo.png';

export const Logo: React.FC<{className?: string}> = ({className}) => (
    <img className={className} src={sun} alt="Site logo" width={150} />
);
