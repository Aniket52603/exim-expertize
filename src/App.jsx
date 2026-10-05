import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"; // stays eager (LCP page)

// everything else loads on demand
const Services = lazy(() => import("./pages/Services.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
// ...repeat for your other pages

export default function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}