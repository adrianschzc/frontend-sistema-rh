import { Link } from "react-router-dom";
import {
  RiBarChartFill,
  RiFolder2Line,
  RiListSettingsLine,
  RiDoorOpenLine,
  RiTeamLine,
  RiLuggageCartFill,
  RiChatUploadLine,
  RiClipboardLine,
  RiFileLockLine,
} from "react-icons/ri";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secundary-100 p-8">
      <div className="">
        <h1 className="text-center text-2xl font-bold text-white mb-8">
          <Link to="/">
            System <span className="text-primary text-4xl">RH</span>
          </Link>
        </h1>
        <ul>
          <li>
            <Link
              to="/vacantes"
              className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
            >
              <RiBarChartFill className="text-primary" />
              Vacantes
            </Link>
          </li>
          <li>
            <Link
              to="/candidatos"
              className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
            >
              <RiTeamLine className="text-primary" />
              Candidatos
            </Link>
          </li>
          <li>
            <Link
              to="/ingresos"
              className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
            >
              <RiFolder2Line className="text-primary" />
              Ingresos
            </Link>
          </li>
          <li>
            <Link
              to="/altas"
              className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
            >
              <RiChatUploadLine className="text-primary" />
              Altas
            </Link>
          </li>
          <li>
            <Link
              to="/blacklist"
              className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
            >
              <RiFileLockLine className="text-primary" />
              BlackList
            </Link>
          </li>
          <li>
            <Link
              to="/caidas"
              className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
            >
              <RiListSettingsLine className="text-primary" />
              Caida o Proceso
            </Link>
          </li>
          <li>
            <Link
              to="/cartera"
              className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
            >
              <RiLuggageCartFill className="text-primary" />
              Cartera
            </Link>
          </li>
          <li>
            <Link
              to="/empleados"
              className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
            >
              <RiClipboardLine className="text-primary" />
              Empleados
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <nav>
          <Link
            to="/auth"
            className="flex items-center gap-4 py-2 px-4 hover:bg-secundary-900 hover:text-white rounded-lg text-sm"
          >
            <RiDoorOpenLine className="text-primary" />
            Cerrar sesion
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
