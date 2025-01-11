import { navLinks } from "../constants"

export const Navbar = () => {
    return(
        <nav>
            <ul>
            {navLinks.map((navLink, index) => (
                <li key={index}><a href="#">{navLink.link}</a></li>
            ))}
            </ul>
        </nav>
    )
}