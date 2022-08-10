import React from 'react';
import {MenuItems} from "./MenuItems";

const NavBar = () => {
    return (
        <nav>
            <ul className="menus">
                {
                    MenuItems.map((menu, i) =>
                        <li key={i} className='menu-items'>
                            <a href='/#'>{menu.title}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;