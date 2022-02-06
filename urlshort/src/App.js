import React from "react"
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";
import Url from "./screens/Url";
import DataScreen from "./screens/DataScreen";
import FullUrlScreen from "./screens/FullUrlScreen";

const App = () => {
  return (
    <Router>
        <Header/>
        <main>
          <Container>
          <Routes>
          <Route path='/' element={<Url/>} exact/>
          <Route path='/data' element={<DataScreen/>} />
          <Route path='/:shortUrl' element={<FullUrlScreen/>} />
          </Routes>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
