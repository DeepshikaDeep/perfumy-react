import Navbar from './Components/navbar';
import { Search } from './Components/search';
import Product from './Components/product';
import About from './Components/about';
import Footer from './Components/footer';

function App(){
    return(
        <div>
    <Navbar></Navbar>
    <Search></Search>
    <Product></Product>
    <About></About>
    <Footer></Footer>
  </div>
    )
}

export default App