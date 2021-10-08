import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <header className="flex aling-center my-8">
            <img src="../assets/mypicture.jpg" alt="my photo" className="mr-4"/>
            <div>
                <h2 className="font-bold text-4xl">Jose E. Marquez</h2>
                <ul>
                    <li className="font-bold mt-2">
                        <NavLink exact to="/" activeClassName="text-gold" className="mr-10">
                            Home
                        </NavLink>
                        <NavLink exact to="/about" activeClassName="text-gold" className="mr-10">
                            About
                        </NavLink>
                        <NavLink exact to="/portfolio" activeClassName="text-gold" className="mr-10">
                            Portfolio
                        </NavLink>
                        <NavLink exact to="/contact" activeClassName="text-gold" className="mr-10">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;