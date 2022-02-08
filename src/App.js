
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './redux/store';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import "./App.css"

function App() {
  return (
    <div >
      <Provider store={store}>

        <Router>
           <Header />
           <Routes>
           <Route path='/' element={<ProductList />} />
           <Route path='/product/:productId' element={<ProductDetail />} />
           </Routes>
           
        </Router>
         
      </Provider>
      
    </div>
  );
}

export default App;
