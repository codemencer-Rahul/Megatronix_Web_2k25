import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import megaLogo from '../assets/megaLogo.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: "Home", value: "", disabled: false },
        { name: "About Us", value: "about", disabled: false },
        { name: "Team", value: "team", disabled: false },
        { name: "Gallery", value: "gallery", disabled: true},
        { name: "Events", value: "event", disabled: false },
    ]

    return (
        <>
            <header className="shadow sticky z-50 top-0 left-0">
            {/* <header className="shadow fixed z-50 top-0 left-0 right-0"> */}
                <nav className="px-4 lg:px-6 py-2.5"
                    style={{
                        fontFamily: "'Walter Turncoat', sans-serif",
                        // glassmorphism
                        background: "hex(#060E0F)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(9.5px)",
                        WebkitBackdropFilter: "blur(9.5px)",
                        borderTop: "0.5px solid grey",
                        borderBottom: "0.5px solid grey"
                    }}
                >
                    <div className="flex justify-between items-center mx-auto max-w-7xl px-6 md:pd-0">

                        <Link to="/" className="flex items-center"> 
                             <img
                                src={megaLogo}
                                alt="Mega Logo"
                                className="h-8 sm:h-10 md:h-12 w-auto object-contain select-none drop-shadow-[0_0_4px_white]"
                                draggable="false"
                            />
                        </Link>

                        <div
                            className={`${isMenuOpen ? 'block' : 'hidden'}
                            fixed lg:static top-16 left-0 right-0 transition-all duration-300 ease-in-out lg:flex lg:w-auto`}
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col italic w-full transition-all duration-300 ease-in-out space-y-4 lg:space-y-0 lg:flex-row lg:space-x-14 lg:w-auto bg-[rgba(13,11,62,0.95)] lg:bg-transparent p-4 lg:p-0">
                                {navItems.map((item, idx) => (
                                    <li key={idx}>
                                        {item.disabled ? (
                                            <span
                                                role="link"
                                                aria-disabled="true"
                                                tabIndex={-1}
                                                className="opacity-50 text-gray-400 cursor-not-allowed relative block py-2 pr-4 pl-3 duration-200 lg:p-1 transform rounded-md"
                                            >
                                                {item.name}
                                            </span>
                                        ) : (
                                            <NavLink
                                                to={`/${item.value}`}
                                                onClick={closeMenu}
                                                className={({ isActive }) =>
                                                    `relative block py-2 pr-4 pl-3 duration-200 lg:p-1 transform 
                                            lg:hover:scale-90 rounded-md
                                            lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[1.2px] 
                                            lg:after:w-full lg:after:origin-left lg:after:scale-x-0 lg:after:bg-white lg:after:transition-transform 
                                            lg:after:duration-300 lg:hover:after:scale-x-100
                                            hover:bg-gray-700/50 lg:hover:bg-transparent
                                            ${isActive ? "text-green-400" : "text-gray-400"}`
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        )}
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div className="flex items-center">
                            <div className='mr-20 hidden lg:inline-block text-blue-200'>
                                {(() => {
                                    const today = new Date()
                                    const day = String(today.getDate()).padStart(2, "0")
                                    const month = String(today.getMonth() + 1).padStart(2, "0")
                                    const year = String(today.getFullYear()).slice(-2).padStart(2, "0")

                                    return (
                                        <>
                                            <span>{day}</span>
                                            <span className='mx-2 font-bold text-emerald-600'>//</span>
                                            <span>{month}</span>
                                            <span className='mx-2 font-bold text-emerald-600'>//</span>
                                            <span>{year}</span>
                                        </>
                                    )
                                })()}
                            </div>

                            <Link
                                to="/contact"
                                className="text-white border-cyan-950 border-2 font-medium rounded-full text-sm px-4 py-2 lg:px-3.5 lg:py-2.5 mr-4 lg:mr-2 
                                duration-200 transform hover:scale-90 hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] "
                            >
                                Contact Us
                            </Link>

                            {/* Hamburger button */}
                            <button
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-300 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                onClick={toggleMenu}
                                aria-controls="mobile-menu-2"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <div className="relative w-6 h-6 flex items-center justify-center">
                                    <span className={`absolute h-0.5 w-5 bg-gray-300 transform transition-all duration-300 ease-in-out 
                                        ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
                                    />
                                    <span className={`absolute h-0.5 w-5 bg-gray-300 transform transition-all duration-300 ease-in-out 
                                        ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                                    />
                                    <span className={`absolute h-0.5 w-5 bg-gray-300 transform transition-all duration-300 ease-in-out 
                                        ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
                                    />
                                </div>
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    );
}