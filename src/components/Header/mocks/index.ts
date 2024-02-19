import type { LinkProps } from "../../Link/link";

import IconUser from "../../../assets/icon-user.svg";
import IconHeart from "../../../assets/icon-heart.svg";
import IconBag from "../../../assets/icon-shoppingbag.svg";
import IconDress from "../../../assets/icon-dress.svg";

export const headerMainLinks: LinkProps[] = [
  {
    icon: {
      src: IconUser,
    },
    anchor: { href: "/" },
    label: "Minha Conta",
  },
  {
    icon: {
      src: IconHeart,
    },
    anchor: { href: "/" },
    label: "Wishlist",
  },
  {
    icon: {
      src: IconBag,
    },
    border: "1px solid #faa500",
    anchor: { href: "/" },
    label: "Meu Carrinho",
    highlight: true,
  },
];

export const headerMenus: LinkProps[] = [
  {
    icon: {
      src: IconDress,
    },
    anchor: { href: "/" },
    label: "Novidades",
    highlight: true,
    color: "#faa500",
  },
  {
    anchor: { href: "/" },
    label: "Vestidos",
  },
  {
    anchor: { href: "/" },
    label: "Roupas",
  },
  {
    anchor: { href: "/" },
    label: "Sapatos",
  },
  {
    anchor: { href: "/" },
    label: "Lingerie",
  },
  {
    anchor: { href: "/" },
    label: "Acessórios",
  },
  {
    anchor: { href: "/" },
    label: "OUTLET",
  },
];
