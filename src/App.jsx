import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";

/* Lazy-load secondary pages */
const About = lazy(() => import("./pages/AboutPage.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/* Home stays eager for better LCP */}
        <Route path="/" element={<Home />} />

        {/* Secondary pages are lazy-loaded */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}