import React from "react";
import { Route, Routes } from "react-router-dom";
import AppHead from "./components/AppHead";
import Container from "./components/Container";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const LogInPage = React.lazy(() => import("./pages/LogInPage.js"));
const RegisterPage = React.lazy(() => import("./pages/RegicterPage.js"));
const ContactsPage = React.lazy(() => import("./pages/ContactsPage"));

export default function App() {
  return (
    <>
      <AppHead></AppHead>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <RegisterPage />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <LogInPage />
              </React.Suspense>
            }
          />
          <Route
            path="/contacts"
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <ContactsPage />
              </React.Suspense>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Container>
    </>
  );
}
