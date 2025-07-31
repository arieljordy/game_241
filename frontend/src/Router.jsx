import React, { useContext } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppelsPage from "./pages/AppelsPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { AuthContext } from "./contexts/AuthContext";
import PartiesPage from "./pages/PartiesPage";

export default function RouterApp() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/*" element={<AppelsPage />} />
          <Route path="/parties-en-cours" element={<PartiesPage />} />
          <Route
            path="/creer-un-compte"
            element={user ? <HomePage /> : <SignupPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
