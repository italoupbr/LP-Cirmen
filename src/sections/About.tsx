import Container from "../components/ui/Container";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import portrait from "../assets/images/sobre-portrait.jpg";
import watermark from "../assets/images/sobre-decor.png";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-terracotta-dark to-terracotta-light py-16 lg:py-20">
      <Container className="relative grid items-center gap-12 lg:grid-cols-[541px_1fr] lg:gap-16">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-[-120px] hidden h-[480px] w-[400px] -translate-y-1/2 overflow-hidden select-none lg:block"
          >
            <img
              src={watermark}
              alt=""
              className="absolute top-1/2 left-0 w-[1150px] max-w-none -translate-y-1/2"
              style={{ mixBlendMode: "soft-light", opacity: 0.9 }}
            />
          </div>

          <Reveal className="relative z-10">
            <img
              src={portrait}
              alt="Dra. Cirmen Leal sorrindo, segurando um tablet em ambiente de consultório"
              className="aspect-[541/589] w-full rounded-[20px] object-cover shadow-portrait"
            />
          </Reveal>
        </div>

        <Reveal delay={120} className="flex flex-col items-start gap-7">
          <div className="flex flex-col gap-4">
            <Tag tone="salmon">SOBRE CIRMEN LEAL</Tag>
            <h2 className="max-w-md font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-[36px]">
              25 anos transformando vidas através da comunicação.
            </h2>
          </div>

          <div className="flex flex-col gap-4 font-body text-base leading-relaxed text-white/60">
            <p>
              Com formação em 2001 e uma trajetória que une a prática clínica
              intensiva à especialização acadêmica, a Dra. Cirmen Leal é
              referência em fonoaudiologia em Belo Horizonte e Nova Lima.{" "}
              <span className="font-bold text-white/80">
                Especialista em Linguagem Oral e Escrita e pós-graduada em
                Autismo pelo CBI of Miami
              </span>
              , ela integra ciência e humanização em cada atendimento.
              Atualmente, aprofunda seus estudos em Neurociências para
              oferecer um olhar refinado sobre o desenvolvimento cognitivo de
              crianças, adultos e idosos.
            </p>
            <p>
              <span className="font-bold text-white/80">
                De intervenções precoces no Autismo à reabilitação cognitiva
                em idosos
              </span>
              , a Dra. Cirmen Leal dedica sua carreira a oferecer soluções
              personalizadas para cada caso. Com pós-graduações em Linguagem
              e TEA, além de uma sólida atuação em programas de
              aperfeiçoamento escolar, sendo{" "}
              <span className="font-bold text-white/80">
                recomendada nas melhores escolas de Belo Horizonte, como;
                Colégio Batista, Magnum, Santa Maria, Maple Bear e outras
                escolas particulares.
              </span>{" "}
              Ela acredita no trabalho em equipe e no acolhimento familiar
              como pilares para resultados extraordinários em Belo Horizonte
              e Nova Lima.
            </p>
          </div>

          <Button variant="outline-white" href="#tratamentos">
            Conheça mais sobre mim
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
