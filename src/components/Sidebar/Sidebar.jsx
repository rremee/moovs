import Profile from "./_components/Profile/Profile.jsx";
import SearchForm from "./_components/SearchForm/SearchForm.jsx";
import NavItems from "./_components/NavItems/NavItems.jsx";
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