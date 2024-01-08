import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import { createContext, useContext } from 'react';

import CartProvider from '../../hooks/CartProvider';

export default function Layout() {
	
	return (
		<CartProvider>
			<header>
				<Nav />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</CartProvider>
	);
}