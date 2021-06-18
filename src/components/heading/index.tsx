import React from "react";
import cn from 'classnames';
import s from './heading.module.scss'


export enum TagEnum {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6'
}

interface ITagSize {
    tag: TagEnum;
    size?: string;
    className?: string;
}

const Heading:React.FC<ITagSize> = ({ children, tag: Tag,
                                        className }) => {
    return(
        <Tag className={cn(s[Tag], className)}>
            {children}
        </Tag>
    )
}

export default Heading;