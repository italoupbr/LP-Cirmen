import Container from "../components/ui/Container";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import CheckItem from "../components/ui/CheckItem";
import Reveal from "../components/ui/Reveal";
import office from "../assets/images/consultorio.jpg";

const checklist = [
  "Estação de trabalho na sala de espera",
  "Espaço Infantil",
  "Consultório Climatizado + Wifi",
];

export default function Office() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[526px_1fr] lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5">
          <div className="flex flex-col gap-3">
            <Tag>CONHEÇA O CONSULTÓRIO</Tag>
            <h2 className="max-w-md font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.04em] text-black sm:text-[32px]">
              Espaço planejado para a evolução do paciente e o conforto da
              família.
            </h2>
          </div>

          <p className="max-w-lg font-body text-base leading-relaxed text-black/40">
            No consultório da Dra. Cirmen, o cuidado se estende à família.
            Enquanto o paciente recebe atendimento especializado, os
            acompanhantes desfrutam de uma estação de trabalho exclusiva com
            Wi-Fi de alta velocidade, ambiente climatizado e total
            privacidade no bairro Colégio Batista. O consultório é composto
            por:
          </p>

          <ul className="flex flex-col gap-2.5">
            {checklist.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>

          <Button variant="gradient" href="#tratamentos" className="mt-1">
            Conheça o consultório
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <img
            src={office}
            alt="Recepção do consultório da Dra. Cirmen Leal, com logo na parede e área de espera"
            className="aspect-[640/427] w-full rounded-[20px] object-cover shadow-office"
          />
        </Reveal>
      </Container>
    </section>
  );
}
