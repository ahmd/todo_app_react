import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TodoApp from './Pages/TodoApp/TodoApp.component';
import About from './Pages/About/About.component';
import Header from './Components/Header/Header.component';
import Footer from './Components/Footer/Footer.component';
import store from './Redux/store'
class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div className="app-content">
          <Header />
          
            <Switch>
              <Route exact path='/' component={TodoApp} />
              <Route exact path='/about' component={About} />
            </Switch>
          
          <Footer />
          </div> 
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
