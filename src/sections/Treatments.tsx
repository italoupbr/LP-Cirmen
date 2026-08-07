import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { treatments } from "../data/treatments";

export default function Treatments() {
  return (
    <section id="tratamentos" className="bg-white py-16 lg:py-20">
      <Container className="flex flex-col items-center">
        <Reveal>
          <SectionHeading
            tag="TRATAMENTOS"
            heading="Soluções Fonoaudiológicas para cada Fase da Vida."
            subheading="Protocolos de elite para o desenvolvimento, reabilitação e bem-estar de toda a sua família. Clique no card e conheça os tratamentos de cada área!"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.name} delay={index * 90}>
              <a
                href="#tratamentos"
                className="group relative block h-[190px] overflow-hidden rounded-tl-[25px] rounded-tr-[5px] rounded-br-[25px] rounded-bl-[5px] shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex h-[70px] items-center justify-center rounded-br-[25px] rounded-bl-[5px] bg-gradient-to-r from-terracotta-dark to-terracotta-light px-4">
                  <p className="font-heading text-lg font-bold text-white">{treatment.name}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360} className="mt-10">
          <Button variant="outline-brown" href="#tratamentos">
            Conhecer todos os tratamentos
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
