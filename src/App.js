import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductsList from './containers/ProductsList';

function App() {
  return (
      <div className="App">
         <BrowserRouter>
            <Header />
           <Switch>
              <Route exact path='/'>
                <ProductComponent />
              </Route>
              <Route exact path='/allproducts'>
                <ProductsList />
              </Route>
              <Route exact path='/allproducts/singleProduct/:id'>
                <ProductDetail />
              </Route>
           </Switch>
         </BrowserRouter>
      </div>
  );
}

export default App;
