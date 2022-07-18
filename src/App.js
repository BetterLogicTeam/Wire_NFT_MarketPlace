import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Auction from "./Components/Auction/Auction";
import Seller from "./Components/Seller/Seller";
import Explore from "./Components/Explore/Explore";
import Collection from "./Components/Collection/Collection";
import Nft from "./Components/Nft/Nft";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Explore_main from "./Components/Explore_main";
import Index_main from "./Components/Index_main";
import Activity from "./Components/Activity/Activity";
import Community from "./Components/Community/Community";
import Authors_main from "./Components/Authors_main";
import Create from "./Components/Create/Create";
import Contact from "./Components/Contact/Contact";
import My_collection from "./My Collection/My_collection";
import Details from "./Components/Details/Details";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <ToastContainer/>
        <Header></Header> 
        <Routes>
          <Route exact path="/" element={<Index_main />} />

          <Route exact path="/Explore_main" element={<Explore_main />} />
          <Route exact path="/Activity" element={<Activity />} />
          <Route exact path="/Community" element={<Community />} />
          <Route exact path="/Authors_main" element={<Authors_main />} />
          <Route exact path="/Create" element={<Create />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/My_collection" element={<My_collection />} />
          <Route exact path='/details/:id' element={<Details/>} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
