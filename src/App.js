
import './App.css';
import { BrowserRouter, Route, Routes, useLocation, Link } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <header className="App-header">
              <h1>SokoGarden - Buy & Sell Online</h1>
          
          </header>
          <nav className="m-4">
              <Link to='/' className="btn btn-dark mx-2">HOME</Link>
            <Link to='/addproduct' className="btn btn-dark mx-2">UPLOAD PRODUCTS</Link>
            <Link to='/signin' className="btn btn-dark mx-2">Sign In</Link>
            <Link to='/signup' className="btn btn-dark mx-2">Sign Up</Link>
</nav>
           <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/addproduct" element={<Addproduct />} />
            {/* This is the default route  */}
            <Route path="/" element={<Getproducts/>} />
            {/* Route for make payment */}
            <Route path="/makepayment" element={<Makepayment/>} />
            <Route path="/chat" element={<ChatBot/>} />
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
