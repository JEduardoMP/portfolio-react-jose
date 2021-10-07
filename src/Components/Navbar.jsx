import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <img src="../assets/mypicture.jpg" alt="my photo" />
            <h2>Jose E. Marquez</h2>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="text-gold">
                        Home
                    </NavLink>
                    <NavLink exact to="/about" activeClassName="text-gold">
                        About
                    </NavLink>
                    <NavLink exact to="/portfolio" activeClassName="text-gold">
                        Portfolio
                    </NavLink>
                    <NavLink exact to="/contact" activeClassName="text-gold">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;