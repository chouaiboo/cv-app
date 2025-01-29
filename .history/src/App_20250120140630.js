import Header from './Compenents/header/Header'
import Home from './Compenents/home/Home'
import Expertise from './Compenents/expertise/Expertise'
import Work from './Compenents/work/Work'
import ContactSection from './Compenents/work/Contact/Contact'
import About from './Compenents/header/about/About'

function App() {
  return (
    <div>
       <BrowserRouter basename="/cv-app">  {/* Note: added basename since your URL shows /cv-app */}
      <Header />
      
      <Home/>
      <About/>      
      <Expertise/>
      <Work/>
      <ContactSection/>
      {/* rest of your app components */}
    </BrowserRouter>



     </div>
  );
}

export default App;
