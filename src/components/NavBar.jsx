import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-black text-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>

      <ul className="flex gap-5">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/projects">Projects</Link></li>
         <li><Link to="/languages">Languages</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;