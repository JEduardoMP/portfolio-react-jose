import { NavLink } from "react-router-dom";

import mypicture from "../assets/mypicture.jpg"

const Navbar = () => {
    return(
        <header className="flex aling-center my-8">
            <div className="flex">
                <img src={mypicture} alt="my photo" className="rounded-full h-24"/>
            </div>
            <div>
                <h2 className="font-bold text-2xl md:text-4x1">Jose E. Marquez</h2>
                <ul className="font-bold text-sm mt-2 flex justify-between">
                    <li>
                        <NavLink exact to="/" activeClassName="text-gold">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="text-gold">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="text-gold">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;