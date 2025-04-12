import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={
      <div className="h-screen w-full flex items-center justify-center">
        <p className="text-lg">Cargando...</p>
      </div>
    }>
      <div className="app">
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
