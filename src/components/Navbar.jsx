import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navItems = [
        { name: "Home", value: "", disabled: false },
        { name: "About Us", value: "about", disabled: false },
        { name: "Team", value: "team", disabled: false },
        { name: "Gallery", value: "gallery", disabled: true },
        { name: "Events", value: "event", disabled: false },
        { name: "Contact Us", value: "contact", disabled: false, isCTA: true },
    ]

    return (
        <>
            {/* Modern compact navbar with centered positioning */}
            <header className="shadow fixed z-50 top-4 sm:top-7 md:top-8 lg:top-6 inset-x-20 sm:inset-x-30 md:inset-x-40 lg:inset-x-46 xl:inset-x-60 2xl:inset-x-80 transition-transform duration-300 ease-out hover:-translate-y-0.5">
                <nav className="px-3 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2.5"
                    style={{
                        background: "rgba(255, 255, 255, 0.1)", 
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)", 
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "2em",
                    }}
                >
                    <div className="flex justify-between items-center mx-auto px-2 sm:px-3 md:px-4 lg:px-4">

                        <Link to="/" className="flex items-center shrink-0">
                            <img
                                src={megaLogo}
                                alt="Mega Logo"
                                className="h-6 min-h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain select-none drop-shadow-[0_0_4px_white]"
                                draggable="false"
                            />
                        </Link>

                        <div
                            className={`${isMenuOpen ? 'block' : 'hidden'}
                            fixed lg:static top-[70px] sm:top-[75px] left-0 right-0 lg:left-0 lg:right-0 transition-all duration-300 ease-in-out lg:flex lg:w-auto`}
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col items-center justify-center w-full min-h-[82vh] lg:min-h-0 transition-all duration-300 ease-in-out space-y-4 lg:space-y-0 lg:flex-row lg:space-x-5 xl:space-x-7 2xl:space-x-8 lg:w-auto bg-[rgba(17,19,20,0.95)] lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                                {navItems.filter(item => !item.isCTA).map((item, idx) => (
                                    <li key={idx}>
                                        {item.disabled ? (
                                            <span
                                                role="link"
                                                aria-disabled="true"
                                                tabIndex={-1}
                                                className="opacity-50 text-gray-400 cursor-not-allowed relative block py-2 pr-4 pl-3 duration-200 lg:p-1 transform rounded-md text-sm sm:text-base lg:text-sm xl:text-sm whitespace-nowrap"
                                            >
                                                {item.name}
                                            </span>
                                        ) : (
                                            <NavLink
                                                to={`/${item.value}`}
                                                onClick={closeMenu}
                                                className={({ isActive }) =>
                                                    `relative block py-2 pr-4 pl-3 duration-200 lg:p-1 transform 
                                                    lg:hover:scale-95 rounded-md text-sm sm:text-base lg:text-sm xl:text-sm whitespace-nowrap
                                                    lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[1px] 
                                                    lg:after:w-full lg:after:origin-left lg:after:scale-x-0 lg:after:bg-white lg:after:transition-transform 
                                                    lg:after:duration-300 lg:hover:after:scale-x-100
                                                    hover:bg-white/10 lg:hover:bg-transparent
                                                    ${isActive ? "text-cyan-500" : "text-gray-200"}`
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        )}
                                    </li>
                                ))}

                                {/* Contact Us - shown in mobile menu */}
                                {navItems.filter(item => item.isCTA).map((item, idx) => (
                                    <li key={`cta-${idx}`} className="lg:hidden mt-6">
                                        <NavLink
                                            to={`/${item.value}`}
                                            onClick={closeMenu}
                                            className="border border-cyan-500 font-medium rounded-full text-sm px-5 py-2 text-white transition-all duration-200 hover:scale-95 hover:bg-cyan-300 hover:text-black"
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center">
                            <div className='mr-4 lg:mr-5 xl:mr-6 hidden lg:inline-block text-blue-200 text-xs xl:text-sm'>
                                {(() => {
                                    const today = new Date()
                                    const day = String(today.getDate()).padStart(2, "0")
                                    const month = String(today.getMonth() + 1).padStart(2, "0")
                                    const year = String(today.getFullYear()).slice(-2).padStart(2, "0")

                                    return (
                                        <>
                                            <span>{day}</span>
                                            <span className='mx-2 font-bold text-cyan-500'>//</span>
                                            <span>{month}</span>
                                            <span className='mx-2 font-bold text-cyan-500'>//</span>
                                            <span>{year}</span>
                                        </>
                                    )
                                })()}
                            </div>

                            {/* Contact Us - shown on desktop in right section */}
                            {navItems.filter(item => item.isCTA).map((item, idx) => (
                                <NavLink
                                    key={`cta-desktop-${idx}`}
                                    to={`/${item.value}`}
                                    className="hidden lg:block border border-cyan-500 font-medium rounded-full text-xs xl:text-sm px-3 xl:px-4 py-1.5 xl:py-2 text-white transition-all duration-200 hover:scale-95 hover:bg-cyan-300 hover:text-black whitespace-nowrap"
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            {/* Hamburger button */}
                            <button
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-300 rounded-lg lg:hidden hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                onClick={toggleMenu}
                                aria-controls="mobile-menu-2"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                                    <span className={`absolute h-0.5 w-4 sm:w-5 bg-gray-300 transform transition-all duration-300 ease-in-out 
                                        ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
                                    />
                                    <span className={`absolute h-0.5 w-4 sm:w-5 bg-gray-300 transform transition-all duration-300 ease-in-out 
                                        ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                                    />
                                    <span className={`absolute h-0.5 w-4 sm:w-5 bg-gray-300 transform transition-all duration-300 ease-in-out 
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