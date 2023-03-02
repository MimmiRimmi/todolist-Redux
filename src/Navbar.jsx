import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex justify-between py-3 px-10 items-center shadow-lg shadow-slate-500/50">
      <h1 className="text-2xl font-extrabold text-cyan-800 font-mono">
        To Do App
      </h1>
      <ul className="flex space-x-8 text-cyan-800 font-extrabold font-mono">
        <li>
          <Link to="/"> Todo with Redux </Link>
        </li>
        <li>
          <Link to="/TodoReducer"> Todo with useReducer </Link>
        </li>
      </ul>
    </div>
  );
}
