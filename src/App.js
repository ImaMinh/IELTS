import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from './pages/Homepage';
import Essay from './pages/Essay';
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#ED4192' } }}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/essay" element={<Essay/>} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;





