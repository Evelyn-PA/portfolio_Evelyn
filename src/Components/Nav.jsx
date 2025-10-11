import { useState } from "react";

export default function Nav() {
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
                    <li><a>Home,</a></li>
                    <li><a>Education,</a></li>
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