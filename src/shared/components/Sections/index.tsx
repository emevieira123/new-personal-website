import { Home } from '../../../pages/Home';
import { Skills } from '../../../pages/Skills';


export function Sections() {
  return (
    <section>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          {/* <About /> */}
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          {/* <Portfolio /> */}
        </section>
        <section id="footer">
          {/* <Footer /> */}
        </section>
      </section>
  );
}
