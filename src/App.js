import './App.css';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import routesConfig from './routesConfig';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <Link to="/">Home</Link> < br/>
          <Link to="/user">User</Link>
        </div>
        {routesConfig.map((value, key) => {
          return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}
          ></Route>
        })}
      </div>
    );
  }
}

export default App;
