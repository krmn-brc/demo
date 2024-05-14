import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";

function App() {
  return (
    <  >
        <Header />
       <Routes>
         <Route index path="/" element={<Products />} />
       </Routes>
    </>
  );
}

export default App;
