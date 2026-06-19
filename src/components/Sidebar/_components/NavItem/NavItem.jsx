import {NavLink} from 'react-router-dom'
import "./navItem.scss";

const NavItem = ({name, icon, path}) => {
	return (
		<li className={'nav-item'}>
			<NavLink
				to={path}
				className={({ isActive }) => `nav-item__link ${isActive ? 'nav-item__link--active' : ''}`}
			>
				<span className={icon}/>
				{name}
			</NavLink>
		</li>
	);
};

export default NavItem;