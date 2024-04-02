import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Panchnamokar from './pages/Panchnamokar';
import Arihant from './pages/Arihant';
import Sidh from './pages/Sidh';
import Arihanam from './pages/Arihanam';
import Uwajayanam from './pages/Uwajayanam';
import Lohesav from './pages/Lohesav';
import Mangal from './pages/Mangal';
import Mangalkibhavna from './pages/Mangalkibhavna';
import Lokotarkibhavna from './pages/Lokotarkibhavna';
import Sharnagati from './pages/Sharnagati';
import Dharam from './pages/Dharam';
import Ahinsha from './pages/Ahinsha';
import Sayam from './pages/Sayam';
import Taap from './pages/Taap';
import Antrangtap from './pages/Antrangtap';
import Prashachit from './pages/Prashachit';
import Vinay from './pages/Vinay';
import Vaiyavart from './pages/Vaiyavart';
import Swadhaya from './pages/Swadhaya';
import Samayik from './pages/Samayik';
import Kayautsarg from './pages/Kayautsarg';
import Bhahritap from './pages/Bhahritap';
import Anshan from './pages/Anshan';
import Unodari from './pages/Unodari';
import Vartisanshep from './pages/Vartisanshep';
import Rashprityag from './pages/Rashprityag';
import Kayakalesh from './pages/Kayakalesh';
import Sanlinta from './pages/Sanlinta';
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
import About from './pages/About';
import Contact from './pages/Contact';
import Importentlink from './pages/Importentlink';
import Others from './pages/Others';
=======
>>>>>>> c60fca01c9bc1ff1078bb5b84581ee8c9ec7da6d

const App = () => {
  return (
    <Router>
    <Navigation />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/importentlink' element={<Importentlink />} />
      <Route path='/others' element={<Others />} />
      <Route path='/panchnamokar' element={<Panchnamokar />} />
      <Route path='/panchnamokar/arihant' element={<Arihant />} />
      <Route path='/panchnamokar/sidh' element={<Sidh />} />
      <Route path='/panchnamokar/arihanam' element={<Arihanam/>} />
      <Route path='/panchnamokar/uwajayanam' element={<Uwajayanam />} />
      <Route path='/panchnamokar/lohesav' element={<Lohesav />} />
      <Route path='/mangal' element={<Mangal />} />
      <Route path='/mangal/mangalkibhavna' element={<Mangalkibhavna />} />
      <Route path='/mangal/lokotarkibhavna' element={<Lokotarkibhavna />} />
      <Route path='/mangal/sharnagati' element={<Sharnagati/>} />
      <Route path='/dharam' element={<Dharam />} />
      <Route path='/ahinsha' element={<Ahinsha />} />
      <Route path='/sayam' element={<Sayam />} />
      <Route path='/taap' element={<Taap />} />
      <Route path='/bhahritap' element={<Bhahritap />} />
      <Route path='/bhahritap/anshan' element={<Anshan/>} />
      <Route path='/bhahritap/unodari' element={<Unodari/>} />
      <Route path='/bhahritap/vartisanshep' element={<Vartisanshep/>} />
      <Route path='/bhahritap/rashprityag' element={<Rashprityag/>} />
      <Route path='/bhahritap/kayakalesh' element={<Kayakalesh/>} />
      <Route path='/bhahritap/sanlinta' element={<Sanlinta/>} />
      <Route path='/antrangtap' element={<Antrangtap />} />
      <Route path='/antrangtap/prashachit' element={<Prashachit/>} />
      <Route path='/antrangtap/vinay' element={<Vinay/>} />
      <Route path='/antrangtap/vaiyavart' element={<Vaiyavart/>} />
      <Route path='/antrangtap/swadhaya' element={<Swadhaya/>} />
      <Route path='/antrangtap/samayik' element={<Samayik/>} />
      <Route path='/antrangtap/kayautsarg' element={<Kayautsarg/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
