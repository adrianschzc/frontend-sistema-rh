import { AuthProvider } from "./context/authContext";
import { VacantesProvider } from "./context/vacantesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Auth
import LayoutAuth from "./layouts/LayoutAuth";
import LoginPage from "./pages/auth/LoginPage";
//Admin
import LayoutAdmin from "./layouts/LayoutAdmin";
import Home from "./pages/admin/Home";
import Error404 from "./pages/Error404";
import Vacantes from "./pages/admin/Vacantes";
import Candidatos from "./pages/admin/Candidatos";
import AddVacante from "./pages/admin/AddVacante";
import AddCandidato from "./pages/admin/AddCandidato";
import { CandidatosProvider } from "./context/candidatosContext";
import CandidatosByIdVacante from "./pages/admin/CandidatosByIdVacante";
import VacantesByDay from "./pages/admin/VacantesByDay";

function App() {
  return (
    <AuthProvider>
      <VacantesProvider>
        <CandidatosProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<LayoutAuth />}>
                <Route index element={<LoginPage />} />
              </Route>
              <Route path="/" element={<LayoutAdmin />}>
                <Route index element={<Home />} />
                <Route path="vacantes" element={<Vacantes />} />
                <Route path="candidatos" element={<Candidatos />} />
                <Route path="addvacante" element={<AddVacante />} />
                <Route path="vacantes/vacante/:id" element={<AddVacante />} />
                <Route
                  path="vacantesdia/addcandidato/:id"
                  element={<AddCandidato />}
                />
                <Route
                  path="vacantes/candidatos/:id"
                  element={<CandidatosByIdVacante />}
                />
                <Route path="vacantesdia" element={<VacantesByDay />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </CandidatosProvider>
      </VacantesProvider>
    </AuthProvider>
  );
}

export default App;
