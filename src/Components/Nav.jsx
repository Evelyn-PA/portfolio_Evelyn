import { useState } from "react";
import { Link } from "react-router-dom"
export default function Nav({ setCurrentImage }) {


    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="nav">
                <div
                    className="hamburger"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    ☰
                </div>



                <ul className="menu">
                    <li>
                        <Link to="/" onClick={() => setCurrentImage("/Image/avt.gif")}>Home,</Link>
                    </li>

                    <li>
                        <Link to="/education" onClick={() => setCurrentImage("/Image/Reading book.png")}>Education,</Link>
                    </li>

                    <li><Link to="/projects" onClick={() => setCurrentImage("/Image/Projects.png")}>Projects,</Link></li>

                    <li><Link to="/skills" onClick={() => setCurrentImage("/Image/Projects.png")}>Skills,</Link></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    ×
                </button>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
                <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                <a onClick={() => setIsOpen(false)}>Skills</a>
                <a onClick={() => setIsOpen(false)}>Contact</a>
            </aside>
        </>


    )
}