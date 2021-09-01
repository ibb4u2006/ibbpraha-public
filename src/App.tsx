import { FC, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import NavBarContainer from './Containers/Common/NavBarContainer';
import HomePage from './Components/Home';
import AboutPage from './Containers/About';
import Footer from './Components/Common/Footer';
import ConnectPage from './Containers/Connect';
import BusinessPage from './Containers/Business';
import ProfilePage from './Containers/Business/Profile';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBarContainer />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact={true} path="/business" component={BusinessPage} />
          <Route path="/business/:id/:name" component={ProfilePage} />
          <Route path="/connect" component={ConnectPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
