import "./App.css";
import Login from "./components/Login";
import Container from "./components/Conatiner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registr from "./components/Registr";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
   return (
      <Container>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/registr" element={<Registr />} />
            </Routes>
         </BrowserRouter>
      </Container>
   );
}

export default App;
