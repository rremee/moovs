const menuItems = [
	{id:'nav-item-1', name: 'Home', icon: 'icon-home', path: '/'},
	{id:'nav-item-2', name: 'Movies', icon: 'icon-movies', path: '/movies'},
	{id:'nav-item-3', name: 'Series', icon: 'icon-series', path: '/series'},
	{id:'nav-item-4', name: 'Trending', icon: 'icon-trending', path: '/trending'},
	{id:'nav-item-5', name: 'Coming soon', icon: 'icon-coming', path: '/coming'},
	{id:'nav-item-6', name: 'Actors', icon: 'icon-actor', path: '/actors'},
	{id:'nav-item-7', name: 'Favorites', icon: 'icon-favorite', path: '/favorites'},
]

const truncText = (text, maxLength) => {
	if (!text) return '';
	if (text.length <= maxLength) return text;
	const lastSpace = text.lastIndexOf(" ", maxLength);
	return text.slice(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}

export {menuItems, truncText};