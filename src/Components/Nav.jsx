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
                    <Link to="/" onClick={() => setCurrentImage("/Image/avt.gif")}><li><a>Home,</a></li></Link>
                    <Link to="/education" onClick={() => setCurrentImage("/Image/Reading book.png")}><li><a>Education,</a></li></Link>

                    <li><a>Projects,</a></li>
                    <li><a>Skills,</a></li>
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
                <a onClick={() => setIsOpen(false)}>Home</a>
                <a onClick={() => setIsOpen(false)}>Education</a>
                <a onClick={() => setIsOpen(false)}>Projects</a>
                <a onClick={() => setIsOpen(false)}>Skills</a>
                <a onClick={() => setIsOpen(false)}>Contact</a>
            </aside>
        </>


    )
}