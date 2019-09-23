import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsComponent from './components/ProductsComponent';
import NewProductComponent from './components/NewProductComponent';
import EditProductComponent from './components/EditProductComponent';
import HeaderComponent from './components/HeaderComponent';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductsComponent}></Route>
            <Route exact path="/product/new" component={NewProductComponent}></Route>
            <Route exact path="/product/edit/:id" component={EditProductComponent}></Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
