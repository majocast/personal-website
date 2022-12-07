import { Link } from "react-scroll";

export default function Navbar() {

    

    /*window.onscroll = function() {
        if(window.pageYOffset > 20) {
            document.querySelector(".site-title").className = "site-title title-hidden";
        } else {
            document.querySelector(".site-title").className = "site-title";
        }
    };*/
    

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