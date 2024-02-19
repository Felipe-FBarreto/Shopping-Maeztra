import type { BenefitsProps } from "../../../components/Benefits/benefits";
import type { ShelfProps } from "../../../components/Shelf/shelf";

import MainBannerDesk from "../../../assets/home-main-banner-desk.jpg";
import MainBannerMobile from "../../../assets/home-main-banner-mobile.jpg";
import DealIcon1 from "../../../assets/benefits-1.svg";
import DealIcon2 from "../../../assets/benefits-2.svg";
import DealIcon3 from "../../../assets/benefits-3.svg";
import DealIcon4 from "../../../assets/benefits-4.svg";
import DealIcon5 from "../../../assets/benefits-5.svg";
import BransImage1 from "../../../assets/partners-1.png";
import BransImage2 from "../../../assets/partners-2.png";
import BransImage3 from "../../../assets/partners-3.png";
import BransImage4 from "../../../assets/partners-4.png";
import BrandImage5 from "../../../assets/partners-5.png";
import Product1 from "../../../assets/product-1.jpg";
import Product2 from "../../../assets/product-2.jpg";

interface Banner {
  src: string;
  mobileSrc?: string;
  anchor: Anchor;
  alt: string;
}

export const mainBanners: Banner[] = [
  {
    src: MainBannerDesk,
    mobileSrc: MainBannerMobile,
    alt: "Banner",
    anchor: {
      href: "/",
    },
  },
  {
    src: MainBannerDesk,
    mobileSrc: MainBannerMobile,
    alt: "Banner",
    anchor: {
      href: "/",
    },
  },
  {
    src: MainBannerDesk,
    mobileSrc: MainBannerMobile,
    alt: "Banner",
    anchor: {
      href: "/",
    },
  },
  {
    src: MainBannerDesk,
    mobileSrc: MainBannerMobile,
    alt: "Banner",
    anchor: {
      href: "/",
    },
  },
  {
    src: MainBannerDesk,
    mobileSrc: MainBannerMobile,
    alt: "Banner",
    anchor: {
      href: "/",
    },
  },
];

export const homeDeals: BenefitsProps = {
  title: "Por que comprar na Maeztra?",
  benefits: [
    {
      title: "Produtos importados",
      subtitle: "Produto de Alta Qualidade",
      icon: DealIcon1,
    },
    {
      title: "Estoque no Brazil",
      subtitle: "Produtos mais perto de você!",
      icon: DealIcon2,
    },
    {
      title: "Trocas Garantidas",
      subtitle: "Trocas em até 48 horas, vejas as regras",
      icon: DealIcon3,
    },
    {
      title: "Ganhe 5% off",
      subtitle: "Pagando à vista no Cartão",
      icon: DealIcon4,
    },
    {
      title: "Frete Grátis",
      subtitle: "Em compras acima de R$ 499,00",
      icon: DealIcon5,
    },
  ],
};

export const homepartners: Array<Image> = [
  {
    src: BransImage1,
    alt: "Marca",
    width: 308,
    loading: "lazy",
  },
  {
    src: BransImage2,
    alt: "Marca",
    width: 308,
    loading: "lazy",
  },
  {
    src: BransImage3,
    alt: "Marca",
    width: 308,
    loading: "lazy",
  },
  {
    src: BransImage4,
    alt: "Marca",
    width: 308,
    loading: "lazy",
  },
  {
    src: BrandImage5,
    alt: "Marca",
    width: 308,
    loading: "lazy",
  },
];

export const homeShelf: ShelfProps = {
  title: "As Mais Pedidas",
  products: [
    {
      image: Product1,
      variations: {
        colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
      },
      price: 500,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      productLink: "/",
      productId: "1",
    },
    {
      image: Product2,
      variations: {
        colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
      },
      price: 320,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      productLink: "/",
      productId: "2",
    },
    {
      image: Product1,
      variations: {
        colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
      },
      price: 500,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      productLink: "/",
      productId: "3",
    },
    {
      image: Product2,
      variations: {
        colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
      },
      price: 320,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      productLink: "/",
      productId: "4",
    },
    {
      image: Product1,
      variations: {
        colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
      },
      price: 500,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      productLink: "/",
      productId: "5",
    },
    {
      image: Product2,
      variations: {
        colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
      },
      price: 320,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      productLink: "/",
      productId: "6",
    },
    {
      image: Product1,
      variations: {
        colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
      },
      price: 500,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      productLink: "/",
      productId: "7",
    },
    {
      image: Product2,
      variations: {
        colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
      },
      price: 320,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      productLink: "/",
      productId: "8",
    },
  ],
};
