import "./App.scss";

import { BrowserRouter,  } from "react-router-dom";
import Routers from "./config/Routers";

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
