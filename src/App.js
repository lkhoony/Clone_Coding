import './App.css';
// import Navigation from './components/Navigation.js';
// import Section from './components/Section.js';
// import Footer from './components/Footer.js'
// import Form from './components/Form.js'

import {Navigation, Section, Footer, Form} from './components';
import { Home, Abroad, Domestic, Airline, Hotel, Tour, Theme} from './pages';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return ( 
    <Router>
      <div className="App">
        <Navigation></Navigation>
        {/* <Form></Form> */}
        {/* <Section sectionTitle = "고객님만을 위한 추천여행"></Section>
        <Section sectionTitle = "청정함을 담은 신비의 섬, 울릉도"></Section> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/abroad">
            <Abroad></Abroad>  
          </Route>
          <Route path="/domestic">
            <Domestic></Domestic>
          </Route>
          <Route path="/airline">
            <Airline></Airline>
          </Route>
          <Route path="/hotel">
            <Hotel></Hotel>
          </Route>
          <Route path="/tour">
            <Tour></Tour>
          </Route>
          <Route path="/theme">
            <Theme></Theme>
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
