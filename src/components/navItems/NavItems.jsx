import {menuItems} from "../../constants/script.js";
import NavItem from "../navItem/NavItem.jsx";
import './navItems.scss'

const NavItems = () => {
	return (
		<nav className={'nav'}>
			<ul className={'nav__list'}>
				{menuItems.map(item => (
					<NavItem
						key={item.id}
						name={item.name}
						icon={item.icon}
						path={item.path}
						isActive={false}
					/>
				))}
			</ul>
		</nav>
	);
};

export default NavItems;