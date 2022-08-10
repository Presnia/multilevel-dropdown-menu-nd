import React from 'react';
import { menuItems } from "../data/menuItems";


const NavBar = () => {
    return (
        <nav>
            <ul className="menus">
                {
                    menuItems.map((menu, i) =>
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