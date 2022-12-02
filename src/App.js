/* Importado de Bootstrap */
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import { Navbar } from "./Componentes/Navbar/Navbar";
import { ContenedorItems } from "./Componentes/ContenedorItems/ContenedorItems";

function App() {
  return (
    <div>
      <Navbar />
      <ContenedorItems saludo='Hola Mundo!' ></ContenedorItems>
    </div>
  );
}

export default App;
