import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Expenses from "./expenses";
import Invoices from "./invoices";
import Home from "./home";
import About from "./about";
import Faqs from "./faqs";
import './App.css'
function Header() {
  return (
    <div className="header-bg">
      <BrowserRouter>
        <nav className="header-nav">
          <ul className="header-logo">
            <li>
              <Link to={'/'} className="header-logo"> SamanChahiye.pk </Link>
            </li>
          </ul>
          <ul className="header-ul-links">
            <li><Link to={'/'} > home </Link></li>
            <li><Link to={'/about'} > about </Link></li>
            <li><Link to={'/faqs'} > faqs </Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Header;