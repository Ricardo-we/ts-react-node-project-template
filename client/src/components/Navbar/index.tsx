import "./Navbar.css";

import { FC, useState } from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

interface NavbarProps {}

const NavBarLink = ({ children, to }: { children: JSX.Element | string,to: string }) => (
	<li className="main-navbar-li ">
		<Link className="main-navbar-link" to={to}>
			{children}
		</Link>
	</li>
);

const Navbar: FC<NavbarProps> = () => {
	const [navbarOpen, setNavBarOpen] = useState<boolean>(false);
	const {user} = useAuthContext();

	return (
		<nav className="main-navbar">
            <div>
			    <h2>DRCPFA</h2>
                <span>Manejo de registros</span>
            </div>

			<button
				onClick={() => setNavBarOpen((prev) => !prev)}
				className="main-navbar-collapse-button"
			>
				<span className="material-icons">menu</span>
			</button>

			<ul className={navbarOpen ? "main-navbar-collapsed" : ""}>
				{user?.user.role === "admin" && <NavBarLink to="/users">Usuarios</NavBarLink>}
			</ul>
		</nav>
	);
};

export default Navbar;
