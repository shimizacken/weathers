import React, {PropsWithChildren} from 'react';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';

export const Heading: React.FC<
    PropsWithChildren<{headingTag?: HeadingTag}>
> = ({headingTag = 'h1', children}) => {
    if (headingTag === 'h1') {
        return <h1>{children}</h1>;
    }

    if (headingTag === 'h2') {
        return <h2>{children}</h2>;
    }

    if (headingTag === 'h3') {
        return <h3>{children}</h3>;
    }

    if (headingTag === 'h4') {
        return <h4>{children}</h4>;
    }

    return <h1>{children}</h1>;
};
