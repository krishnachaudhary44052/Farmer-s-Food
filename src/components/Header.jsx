import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="position-relative z-3">
      {showSearch && (
        <div className="search-overlay">
          <input
            type="text"
            placeholder="Search..."
            className="form-control search-input"
          />
          <button
            onClick={() => setShowSearch(false)}
            className="btn-close ms-3"
          />
        </div>
      )}

      <header className="main_header shadow-sm py-3 px-3 position-relative">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link to="/" className="text-decoration-none">
            <img
              src="./image/logo.png"
              alt="Logo"
              className="logo-img"
              style={{ maxHeight: "70px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className=" d-md-flex align-items-center gap-4">
            <Link to="/Menu" className="text-black  text-decoration-none" style={{ fontSize: "1.2rem", fontWeight: 500 }}>
              Menu
            </Link>
            <div
              className="position-relative"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button className="btn text-decoration-none btn-link text-black p-0" style={{ fontSize: "1.2rem", fontWeight: 500 }}>
                About us
              </button>
              {showAboutDropdown && (
                <div className="dropdown-menu-custom">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/Story" className="dropdown-item-custom">
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link to="/app" className="dropdown-item-custom">
                        Our App
                      </Link>
                    </li>
                    <li>
                      <Link to="/career" className="dropdown-item-custom">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Buttons */}
          <div className="d-flex d-md-none align-items-center gap-3">
            <button className="btn p-0" onClick={() => setShowSearch(true)}>
              <Search className="text-secondary" />
            </button>
            <button
              className="btn p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="text-dark" /> : <Menu className="text-dark" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="d-md-none mt-3 bg-black text-white border-top border-secondary position-absolute top-100 start-0 w-100 z-3 p-3 shadow">
            <Link to="/Menu" className="d-block mb-2 text-white text-decoration-none">
              Menu
            </Link>
            <button
              onClick={() => setShowAboutDropdown(!showAboutDropdown)}
              className="btn btn-link text-white text-start w-100 p-0"
            >
              About us
            </button>
            {showAboutDropdown && (
              <div className="ms-3">
                <li>
                  <Link to="/Story" className="text-white text-decoration-none">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/app" className="text-white text-decoration-none">
                    Our App
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="text-white text-decoration-none">
                    Careers
                  </Link>
                </li>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
