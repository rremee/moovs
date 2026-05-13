import Profile from "../profile/Profile.jsx";
import SearchForm from "../searchForm/SearchForm.jsx";
import NavItems from "../navItems/NavItems.jsx";
import logo from "../../assets/logo.svg"
import './sidebar.scss';


const Sidebar = () => {
	return (
		<aside className={'sidebar'}>
			<a href="/" className='logo'>
				<img src={logo} alt="Moovs Logo"/>
			</a>
			<Profile/>
			<SearchForm/>
			<NavItems/>
		</aside>
	);
};

export default Sidebar;