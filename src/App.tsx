import Hero from "./sections/Hero";
import Treatments from "./sections/Treatments";
import About from "./sections/About";
import Office from "./sections/Office";
import Faq from "./sections/Faq";

function App() {
  return (
    <>
      {/*
        THESIS: precise, faithful reproduction of the client-supplied Figma home page for Dra. Cirmen Leal — fidelity to the comp is the goal, not a new visual direction.
        OWN-WORLD: warm terracotta gradient (#894c3b -> #b57e6f) + cream (#ebddd1) + salmon/brown eyebrow accents; Comfortaa headings (rounded, friendly), Inter body; full-round pill buttons with an inset circular icon badge; asymmetric-radius treatment cards.
        STORY: a parent or patient in BH/Nova Lima reads the credentials (25 years, CBI of Miami, school recommendations), sees the four treatment tracks and the office, and books an evaluation.
        FIRST VIEWPORT: cream hero card — headline + subcopy + gradient CTA left, doctor portrait with soft-fade edge and faint "Cirmen" watermark right.
        FORM: approved comp (Figma node 2:2, file WzgaTbRj26QwVhnP6sdSpN), no invented direction — same "approved comp" path used on the sibling Mais60 build.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
      */}
      <main>
        <Hero />
        <Treatments />
        <About />
        <Office />
        <Faq />
      </main>
    </>
  );
}

export default App;
