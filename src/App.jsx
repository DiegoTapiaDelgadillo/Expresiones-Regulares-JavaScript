import { Route, HashRouter, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const MENUOPTIONS = [
  {
    path: "/",
    name: "Introducción a las Expresiones Regulares en JavaScript",
  },
  {
    path: "/usando-expresiones-regulares-javaScript",
    name: "Usando Expresiones Regulares en JavaScript",
  },
  {
    path: "/practicando-expresiones-regulares-javaScript",
    name: "Practicando Expresiones Regulares en JavaScript",
  },
];

export default function App() {
  const Home = lazy(() => import("./pages/home"));
  const NotFound = lazy(() => import("./pages/notFound"));
  const UsandoREJ = lazy(() =>
    import("./pages/ usandoExpresionesRegularesJavaScript")
  );
  const Practicando = lazy(() => import("./pages/practicando"));
  return (
    <HashRouter>
      <Navbar menuOptions={MENUOPTIONS} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/usando-expresiones-regulares-javaScript"
            element={<UsandoREJ />}
          />
          <Route
            path="/practicando-expresiones-regulares-javaScript"
            element={<Practicando />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </HashRouter>
  );
}
