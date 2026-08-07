import { useState } from "react";
import Container from "../components/ui/Container";
import Tag from "../components/ui/Tag";
import Reveal from "../components/ui/Reveal";
import crossIcon from "../assets/icons/icon-cross.svg";
import { faqItems } from "../data/faq";

function FaqRow({ question, delay }: { question: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="border-b border-white/25 pb-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-start justify-between gap-4 text-left"
        >
          <span className="font-heading text-base font-bold leading-snug text-white">
            {question}
          </span>
          <img
            src={crossIcon}
            alt=""
            className={`mt-1 size-3.5 shrink-0 transition-transform duration-300 ease-out ${
              open ? "rotate-0" : "rotate-45"
            }`}
          />
        </button>
        <div
          className={`grid transition-all duration-300 ease-out ${
            open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden font-body text-sm leading-relaxed text-white/50 italic">
            Resposta em breve — conteúdo a ser fornecido pela Dra. Cirmen.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Faq() {
  return (
    <section className="bg-white px-6 pb-16 md:px-10 lg:px-0 lg:pb-20">
      <Container>
        <div className="rounded-[50px] bg-gradient-to-b from-terracotta-dark to-terracotta-light px-6 py-14 sm:px-10 lg:px-16">
          <Reveal>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
              <Tag tone="salmon">FAQ</Tag>
              <h2 className="font-heading text-[26px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[30px]">
                Perguntas frequentes que recebemos
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            {faqItems.map((question, index) => (
              <FaqRow key={question} question={question} delay={(index % 3) * 80} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
