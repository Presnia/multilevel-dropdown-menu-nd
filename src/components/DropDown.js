import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
            {submenus.map((submenu, i) => (
                <MenuItems key={i} items={submenu} />
            ))}
        </ul>
    );
};

export default Dropdown;