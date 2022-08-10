import React from 'react';
import { menuItems } from "../data/menuItems";
import MenuItems from "./MenuItems";

const NavBar = () => {
    return (
        <nav>
            <ul className="menus">
                {
                    menuItems.map((menu, i) => {
                        const depthLevel = 0;
                        return <MenuItems key={i} items={menu} depthLevel={depthLevel} />
                        }
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;