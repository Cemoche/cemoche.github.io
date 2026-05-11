type Social = {
  label: string;
  link: string;
  icon: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "cem.yld.pro@gmail.com",
  title: "Hi, I’m Cem 👋",
  profile: "/killua-double-kalash.jpg",
  description:
    "Bonjour, I'm a *28 years old french full-stack developer* with over *8 years* of web experience. I design and deploy logistics automation systems, real-time pipelines, and fullstack applications. If I'm not coding, I'm probably playing video games. Feel free to contact me for any project or just to say hi !",
  socials: [
    {
      label: "Github",
      link: "https://github.com/cemoche",
      icon: "simple-icons:github",
    },
  ],
};

export default presentation;
