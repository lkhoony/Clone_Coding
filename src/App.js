import './App.css';
// import Navigation from './components/Navigation.js';
// import Section from './components/Section.js';
// import Footer from './components/Footer.js'
// import Form from './components/Form.js'
import 'antd/dist/antd.css';
import {Navigation, Section, Footer, Form} from './components';
import { Home, Abroad, Domestic, Airline, Hotel, Tour, Theme} from './pages';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Page } from "./common";

function App() {
  return ( 
    <Router>
      <div className="App">
        <Navigation></Navigation>
        {/* <Section sectionTitle = "고객님만을 위한 추천여행"></Section>
        <Section sectionTitle = "청정함을 담은 신비의 섬, 울릉도"></Section> */}
        <Page></Page>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
