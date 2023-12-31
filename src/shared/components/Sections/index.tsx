import { ToastContainer } from 'react-toastify';
import { Contact } from '../../../pages/Contact';
import { Home } from '../../../pages/Home';
import { Portfolio } from '../../../pages/Portfolio';
import { Skills } from '../../../pages/Skills';
import { Footer } from '../Footer';


export function Sections() {
  return (
    <>
      <section>
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
