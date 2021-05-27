import React from 'react';
import cn from 'classnames';

import s from './style.module.scss';


const Layout = ({ children, className = null }) => (
    <div className={cn(s.root, s.contentWrap, className)}>{children}</div>
);

export default Layout;