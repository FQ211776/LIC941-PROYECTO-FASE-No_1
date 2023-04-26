import { send, shield, star } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "abrir",
    title: "Abrir una cuenta",
  },
  {
    id: "productos",
    title: "Productos y servicios",
  },
  {
    id: "clientes",
    title: "Acceso clientes",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Mas de 20 países",
    value: "20+",
  },
  {
    id: "stats-2",
    title: "Millones de usuarios",
    value: "4m+",
  },
  {
    id: "stats-3",
    title: "volumen de transacciones",
    value: "$1230M+",
  },
];

export const beneficios = [
  {
    id: "feature-1",
    icon: star,
    title: "Premios exclusivos",
    content:
      "hasta un 20% de Cashback en todas tus compras en comercios seleccionados. ¡Tan solo tendrás que mirar cómo se multiplica tu dinero!",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Seguro",
    content:
      "Nuestros galardonados sistemas de seguridad y socios de confianza nos ayudan a proteger tu dinero",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Todos tus gastos, organizados automáticamente",
    content:
      "¿Te preguntas adónde va tu dinero? PokeBank categoriza de forma automática los movimientos de tu cuenta para que puedas ver de un vistazo en qué gastas cada mes",
  },
];
