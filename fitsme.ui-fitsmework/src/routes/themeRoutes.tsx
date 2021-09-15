import { Home, AboutUs, Sizing, Contact, RedirectPage } from '../pages';
var ThemeRoutes = [
	{
		path: '/home',
		name: 'Home',
		icon: 'ti-loop',
		component: Home,
	},
	{
		path: '/about-us',
		name: 'About Us',
		icon: 'ti-loop',
		component: AboutUs,
	},
	{
		path: '/:brandCode/:productCode/sizing',
		name: 'Fit Finder',
		icon: 'ti-loop',
		component: Sizing,
	},
	{
		path: '/contact',
		name: 'Contact',
		icon: 'ti-loop',
		component: Contact,
	},
	{
		path: '/redirect/:brandCode/:productCode',
		name: 'Redirect',
		icon: 'ti-loop',
		component: RedirectPage,
	},
	{ path: '/', pathTo: '/home', name: 'Home', redirect: true },
];
export default ThemeRoutes;
