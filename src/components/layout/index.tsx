import React from 'react';
import cn from 'classnames';

import s from './style.module.scss';

interface ILayout{
    className?: string;
}

const Layout:React.FC<ILayout> = ({ children, className = null}) => (
    <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;