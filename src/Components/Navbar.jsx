import { NavLink } from "react-router-dom";

import mypicture from "../assets/mypicture.jpg"

const Navbar = () => {
    return(
        <header className="flex items-center my-8">
            <div className="flex">
                <img src={mypicture} alt="myself" className="rounded-full h-24"/>
            </div>
            <div className="flex flex-col justify-end ml-4 md:w-4/12 lg:w-4/12">
                <h2 className="font-bold text-2xl md:text-2x1 md:mb-4">Jose E. Marquez</h2>
                <ul className="font-bold text-sm mt-2 flex justify-between lg:text-lg">
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