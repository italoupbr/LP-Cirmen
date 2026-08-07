import infantil from "../assets/images/card-infantil.jpg";
import adulto from "../assets/images/card-adulto.jpg";
import longevidade from "../assets/images/card-longevidade.jpg";
import auditivo from "../assets/images/card-auditivo.jpg";

export type Treatment = {
  name: string;
  image: string;
};

export const treatments: Treatment[] = [
  { name: "Desenvolvimento Infantil", image: infantil },
  { name: "Saúde do Adulto", image: adulto },
  { name: "Longevidade Ativa", image: longevidade },
  { name: "Treinamento Auditivo", image: auditivo },
];
