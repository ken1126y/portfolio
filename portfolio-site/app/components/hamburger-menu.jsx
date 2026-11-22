"use client";

import { useState } from "react";
import Link from "next/link";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`header__nav ${isOpen ? "is-active" : ""}`}>
        <Link href="/" className="header__nav-link" onClick={() => setIsOpen(false)}>
          Blog
        </Link>
        <Link href="/about" className="header__nav-link" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link href="/product" className="header__nav-link" onClick={() => setIsOpen(false)}>
          Product
        </Link>
        <Link href="/contact" className="header__nav-link" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </nav>

      <button
        type="button"
        className={`hamburger-menu ${isOpen ? "is-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニュー"
        aria-expanded={isOpen}
      >
        <span className="hamburger-menu__line"></span>
        <span className="hamburger-menu__line"></span>
        <span className="hamburger-menu__line"></span>
      </button>
    </>
  );
}