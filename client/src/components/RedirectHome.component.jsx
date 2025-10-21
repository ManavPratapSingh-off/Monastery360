import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function RedirectHome() {
  return (
    <Link to="/home" className="fixed top-4 left-4 text-indigo-600 text-3xl hover:text-indigo-800 transition-colors">
      <AiFillHome />
    </Link>
  );
}
