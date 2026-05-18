import "./navItem.scss";

const NavItem = ({name, icon, path, isActive}) => {
	return (
		<li className={`nav-item ${isActive ? 'nav-item--active' : ''}`}>
			<a href={path}>
				<span className={icon}/>
				{name}
			</a>
		</li>
	);
};

export default NavItem;