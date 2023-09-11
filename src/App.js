import Contact from './components/Contact/contact';
import Intro from './components/Intro/intro';
import Navbar from './components/NavBar/navbar';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import PdfViewer from './components/PDF/pdf'
import samplePdf from './Resume-VanshikaAssudani-0729.pdf'
function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          {/* <PdfViewer pdf={ samplePdf }/> */}
          <Skills/>
          <Works/>
          <Contact/>
          
    </div>
  );
}

export default App;
