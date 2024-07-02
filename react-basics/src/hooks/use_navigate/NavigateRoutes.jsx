import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from './Welcome'
import ThankYou from './ThankYou'

const NavigateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/navigate/welcome" element={<Welcome />} />
          <Route path="/navigate/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default NavigateRoutes