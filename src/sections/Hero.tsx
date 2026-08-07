import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import heroPortrait from "../assets/images/hero-portrait.jpg";
import watermark from "../assets/images/sobre-decor.png";

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-16 lg:pt-24 lg:pb-20">
      <Container>
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden rounded-[40px] bg-cream shadow-[0_30px_70px_-20px_rgba(137,76,59,0.35)]">
            <img
              src={watermark}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-[52%] hidden w-[980px] -translate-y-[46%] opacity-[0.3] select-none lg:block"
            />
          </div>

          <div className="relative z-10 px-8 py-10 sm:px-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:gap-6">
              <Reveal className="flex flex-col items-start gap-5 lg:max-w-xl lg:py-8">
                <h1 className="max-w-xl font-heading text-[30px] leading-[1.15] tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]">
                  Fonoaudióloga em Belo Horizonte referência em Reabilitação
                  e Linguagem.
                </h1>
                <p className="max-w-md font-body text-base leading-relaxed text-black/40">
                  Com 25 anos de experiência e certificação internacional, a{" "}
                  <span className="font-bold text-black/60">
                    Dra. Cirmen Leal
                  </span>{" "}
                  oferece tratamentos personalizados para transformar a
                  comunicação e a qualidade de vida de sua família.
                </p>
                <Button variant="gradient" href="#tratamentos">
                  Agende uma seção avaliativa
                </Button>
              </Reveal>

              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>

          <Reveal
            delay={120}
            className="relative z-20 hidden lg:absolute lg:right-8 lg:bottom-0 lg:block lg:w-[460px]"
          >
            <img
              src={heroPortrait}
              alt="Dra. Cirmen Leal, fonoaudióloga, sorrindo de jaleco em seu consultório"
              className="relative z-10 aspect-[423/495] w-full object-cover object-top shadow-photo"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to bottom, black 88%, transparent)",
                maskComposite: "intersect",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to bottom, black 88%, transparent)",
                WebkitMaskComposite: "source-in",
              }}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
