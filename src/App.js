import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from './pages/Homepage';
import Essay from './pages/Essay';
import { ConfigProvider } from "antd";
import EssayDisplay from "./pages/EssayDisplay";

const App = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: 'white' } }}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/essay" element={<Essay/>} />
            <Route path={"/essay/:essayID"} element={<EssayDisplay/>}/>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;





