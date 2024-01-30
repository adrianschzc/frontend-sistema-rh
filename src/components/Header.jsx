import { RiAddLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center gap-2 justify-end h-[10vh] border-b border-secundary-100 px-12">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="bg-primary rounded-full p-2 text-white hover:bg-blue-500"
      >
        <RiAddLine />
      </button>
      <div className="relative z-10">
        <ul
          className={`absolute top-7 right-0 bg-gray-800 p-2 rounded-lg ${
            showMenu ? "" : "hidden"
          } w-[150px]`}
        >
          <li className="text-sm hover:bg-gray-700 p-2 rounded-lg">
            <Link to="/addvacante" onClick={() => setShowMenu(!showMenu)}>
              Agregar vacante
            </Link>
          </li>
          <li className="text-sm hover:bg-gray-700 p-2 rounded-lg">
            <Link to="/vacantesdia" onClick={() => setShowMenu(!showMenu)}>
              Agregar candidato
            </Link>
          </li>
          <li className="text-sm hover:bg-gray-700 p-2 rounded-lg">
            <Link to="/" onClick={() => setShowMenu(!showMenu)}>
              Agregar usuario
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
