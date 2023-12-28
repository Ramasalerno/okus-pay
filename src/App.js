import Barra1 from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage';
import { HomeFooter } from './components/HomeFooter/HomeFooter';
import { Contacto } from './components/pages/Contacto/Contacto';
import { PageNotFound } from './components/pages/PageNotFound/PageNotFound';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import { SobreNosotros } from './components/pages/SobreNosotros/SobreNosotros';
import { PreguntasFrecuentes } from './components/PreguntasFrecuentes/PreguntasFrecuentes';
import { PregFrecuentes } from './components/PregFrecuentes/PregFrecuentes';


function App() {
  return (

    <BrowserRouter>
    <ScrollToTop>
        <Barra1/>
            <Routes>
              <Route path="/" element= {<HomePage/> }/>
              <Route path='*' element= { <Navigate to ="/PageNotFound" /> } />
              <Route path="/PageNotFound" element= {<PageNotFound/> }/>
              <Route path="/nosotros" element= {<SobreNosotros/> }/>
              <Route path="/contacto" element= {<Contacto/> }/>
              <Route path="/preguntas_frecuentes" element= {<PreguntasFrecuentes/> }/>
              <Route path="/preguntas_frecuentes2" element= {<PregFrecuentes/> }/>


            </Routes>
        <HomeFooter/>
        </ScrollToTop>
    </BrowserRouter> 
  );
}

export default App;
