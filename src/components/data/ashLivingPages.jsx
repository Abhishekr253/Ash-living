import sovereign from "../../assets/sovspace.png";
// import astral from "../assets/astral.jpg";
// import immersion from "../assets/immersion.jpg";
// import shop from "../assets/shop.jpg";
// import inside from "../assets/inside.jpg";
// import collaboration from "../assets/collaboration.jpg";

export const ashLivingPages = [
  {
    image: sovereign,
    subtitle: "THE",
    title: (
      <>
        SOVEREIGN
        <br />
        SPACE
      </>
    ),
    description:
      "A private sanctuary for elevated consciousness, transformation and self-mastery.",
    dark: true,
  },

  {
    subtitle: "CURATED ESSENTIALS",
    title: "ASH LIVING SHOP",
    description:
      "Regenerative essentials and intentional products crafted to elevate everyday living.",
    buttonText: "SHOP NOW",
    path: "/shop",
    dark: false,
  },

  {
    subtitle: "EXPAND CONSCIOUSNESS",
    title: <>ASTRAL ASCENSION</>,
    description:
      "Explore advanced teachings, immersive experiences and pathways into expanded awareness.",
    buttonText: "START ELEVATION",
    path: "/astral-ascension",
    dark: false,
  },

  {
    subtitle: "EXCLUSIVE EXPERIENCES",
    title: "PRIVATE IMMERSIONS",

    description:
      "Highly personalised journeys designed for deep transformation and restoration.",
    buttonText: "BOOK NOW",
    path: "/private-immersions",
    dark: false,
  },

  {
    subtitle: "BEHIND THE VISION",
    title: "INSIDE ASH LIVING",
    description:
      "Discover the philosophy, stories and people behind Ash Living.",
    buttonText: "ACCESS",
    path: "/inside-ash-living",
    dark: false,
  },

  {
    // image: collaboration,
    subtitle: "PARTNERSHIPS",
    title: "COLLABORATE WITH US",
    description:
      "Create meaningful impact through aligned partnerships and shared visions.",
    buttonText: "EXPLORE",
    path: "/collaborations",
    dark: false,
  },
];
