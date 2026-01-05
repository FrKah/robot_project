import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar bg-gradient-to-r from-base-200 via-base-200 to-base-300 shadow-lg backdrop-blur-lg border-b border-primary/20 h-16">
        <div className="navbar-start">
          <h1 className="text-lg font-bold">Team 4</h1>
        </div>

        {/* Mobile hamburger button */}
        <div className="navbar-end lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <section className="navbar-center hidden lg:flex h-full">
          <MenuList />
        </section>
        <menu className="navbar-end hidden lg:flex"></menu>
      </nav>
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="bg-base-200 top-full z-40 w-full lg:hidden">
          <MenuList mobile />
        </div>
      )}
    </>
  );
};

const MenuList = ({ mobile = false }) => (
  <ul
    className={`menu ${mobile ? 'menu-vertical w-full items-center p-2' : 'menu-horizontal p-0 h-full gap-0'}`}
  >
    <li className={mobile ? 'w-full' : 'h-full flex'}>
      <a className={mobile ? 'w-full justify-center' : 'h-full flex items-center px-4 rounded-none'} href="/">
        Home
      </a>
    </li>
    <li className={mobile ? 'w-full' : 'h-full flex'}>
      <a className={mobile ? 'w-full justify-center' : 'h-full flex items-center px-4 rounded-none'} href="/robot-architecture">
        Robot Architecture
      </a>
    </li>
    <li className={mobile ? 'w-full' : 'h-full flex'}>
      <a
        className={mobile ? 'w-full justify-center' : 'h-full flex items-center px-4 rounded-none'}
        href="/algorithms"
      >
        Algorithms
      </a>
    </li>
    <li className={mobile ? 'w-full' : 'h-full flex'}>
      <a className={mobile ? 'w-full justify-center' : 'h-full flex items-center px-4 rounded-none'} href="/code">
        Code
      </a>
    </li>
    <li className={mobile ? 'w-full' : 'h-full flex'}>
      <a
        className={mobile ? 'w-full justify-center' : 'h-full flex items-center px-4 rounded-none'}
        href="/media"
      >
        Media
      </a>
    </li>
    <li className={mobile ? 'w-full' : 'h-full flex'}>
      <a className={mobile ? 'w-full justify-center' : 'h-full flex items-center px-4 rounded-none'} href="/team">
        Team
      </a>
    </li>
  </ul>
);

export default Navbar;
