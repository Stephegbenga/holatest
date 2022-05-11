import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './mainComponents/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import{About} from "./mainComponents/About";
import{CollectionDetails} from "./components/userStore/Collections/CollectionDetails";
import{Listings} from "./components/userStore/Collections/Listings";
import{Creators} from "./components/userStore/Collections/Creators";
import { ConnectWallet } from './components/Home/Main/ConnectWallet';
import { MintPage } from './mainComponents/MintPage';
import { Error } from './components/Home/Main/Error';
import { Profile } from './components/Home/Main/Profile';






function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path='/about' element={<About />} />
         <Route path='/nft' element={<CollectionDetails />} />
         <Route path='/listings' element={<Listings />} />
         <Route path='/Creators' element={<Creators />} />
         <Route path="/connect-wallet" element={<ConnectWallet />} />
         <Route path="/mint" element={<MintPage />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/*" element={<Error />} />
       </Routes>
     </Router>

     </div>
  );
}

export default App;
