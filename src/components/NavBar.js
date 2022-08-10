import React from 'react';
import { menuItems } from "../data/menuItems";
import MenuItems from "./MenuItems";

const NavBar = () => {
    return (
        <nav>
            <ul className="menus">
                {
                    menuItems.map((menu, i) =>
                        <MenuItems key={i} items={menu} />
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;