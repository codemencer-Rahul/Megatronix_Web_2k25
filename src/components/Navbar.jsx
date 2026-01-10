import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import megaLogo from "../assets/megaLogo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", value: "" },
    { name: "About Us", value: "about" },
    { name: "Team", value: "team" },
    { name: "Gallery", value: "gallery", disabled: true },
    { name: "Events", value: "event" },
  ];

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <header className="fixed z-50 top-4 left-4 right-4 sm:left-8 sm:right-8 xl:left-60 xl:right-60">
        <nav
          className="mx-auto flex items-center justify-between px-4 py-2 rounded-full"
          style={{
            background: "var(--glass-white)",
            backdropFilter: "blur(10px)",
            border: "1px solid var(--yellow-border-soft)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={megaLogo}
              alt="Mega Logo"
              className="h-7 sm:h-8 lg:h-9 object-contain select-none"
              draggable={false}
            />
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center space-x-6 text-sm">
            {navItems.map((item, idx) => (
              <li key={idx}>
                {item.disabled ? (
                  <span
                    className="opacity-50 cursor-not-allowed"
                    style={{ color: "var(--gray-muted)" }}
                  >
                    {item.name}
                  </span>
                ) : (
                  <NavLink
                    to={`/${item.value}`}
                    className="transition-all duration-200"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "var(--yellow-primary)"
                        : "var(--gray-text)",
                    })}
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <NavLink
            to="/contact"
            className="hidden lg:block rounded-full px-4 py-1.5 text-sm transition-all"
            style={{
              border: "1px solid var(--yellow-primary)",
              color: "var(--white)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--yellow-primary)";
              e.currentTarget.style.color = "var(--black)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--white)";
            }}
          >
            Contact Us
          </NavLink>

          {/* HAMBURGER */}
          <button
            className="lg:hidden p-2 relative z-50 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {!isMenuOpen ? (
                /* Hamburger */
                <div className="w-6 h-6 flex flex-col justify-between">
                  <span
                    className="h-0.5 w-full"
                    style={{ background: "var(--gray-text)" }}
                  />
                  <span
                    className="h-0.5 w-full"
                    style={{ background: "var(--gray-text)" }}
                  />
                  <span
                    className="h-0.5 w-full"
                    style={{ background: "var(--gray-text)" }}
                  />
                </div>
              ) : (
                /* Close (X) */
                <span
                  className="text-2xl font-light leading-none"
                  style={{ color: "var(--yellow-primary)" }}
                >
                  ×
                </span>
              )}
            </div>
          </button>


        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        style={{ backgroundColor: "var(--black)" }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 h-11 w-11 rounded-full flex items-center justify-center text-2xl"
          style={{
            color: "var(--yellow-primary)",
            border: "2px solid var(--yellow-primary)",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          ×
        </button>

        {/* MOBILE LINKS */}
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.disabled ? (
                <span
                  className="opacity-50"
                  style={{ color: "var(--gray-muted)" }}
                >
                  {item.name}
                </span>
              ) : (
                <NavLink
                  to={`/${item.value}`}
                  onClick={closeMenu}
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--yellow-primary)"
                      : "var(--gray-text)",
                  })}
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}

          {/* MOBILE CTA */}
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mt-8 rounded-full px-6 py-2 text-sm"
            style={{
              border: "1px solid var(--yellow-primary)",
              color: "var(--white)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--yellow-primary)";
              e.currentTarget.style.color = "var(--black)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--white)";
            }}
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
    </>
  );
}
