import { Link } from "react-scroll"
import { useRef } from 'react'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link className="site-title" smooth spy to="home">Marc Castro</Link>
            <ul>
                <li>
                    <Link activeClass="active" smooth spy to="about">
                    ABOUT
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="projects">
                    PROJECTS
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

/*
function CustomLink ({ to, children, ...props }) {
    return (
        <li>
            <Link activeCLass="active" smooth spy to={to} {...props}>
                {children}
            </Link>
        </li>
    )
    
}
*/