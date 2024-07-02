import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/instagram/" element={<Navbar />}>  {/* here it is a parent so it remains constant for all pages */}
          <Route index element={<Home />} /> {/* invoked bydefault, it uses its parent path */}
          <Route path="blogs" element={<Blogs />} /> {/* in child path, parent path slash added/prefixed with all child bcoz of <outlet> tag */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router