import React from 'react';
import {STRUCTURE} from "../../constants";
import {NavLink} from "react-router-dom";
import css from './styles.module.scss';

export const Header = () => {
    return (
        <div className={css.header}>
            {Object.values(STRUCTURE).map((link, index) =>
                <NavLink
                    key={index}
                    to={link.route}
                    exact={true}
                    className={css.link}
                    activeClassName={css.linkActive}
                >
                    {link.title}
                </NavLink>)}
        </div>
    )
};