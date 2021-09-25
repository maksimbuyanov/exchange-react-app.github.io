import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Points from '../Exchange-points/Points';
import Contacts from '../Contacts/Contacts';
import data from './dataBase';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends React.Component {

  render() {
    const PointsWithData = () => <Points data={data} />
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/exchange-points' component={PointsWithData} />
            <Route path='/contacts' component={Contacts} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
