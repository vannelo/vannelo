const STACK = [
  {
    key: Math.random(),
    name: "ReactJS",
    image: "/img/react-js.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "NextJS",
    image: "/img/next-js.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "AngularJS",
    image: "/img/angular-js.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "Redux",
    image: "/img/redux.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "Jest",
    image: "/img/jest.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "TypeScript",
    image: "/img/typescript.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "JavaScript",
    image: "/img/javascript.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "jQuery",
    image: "/img/jquery.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "HTML5",
    image: "/img/html-5.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "CSS3",
    image: "/img/css-3.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "SASS",
    image: "/img/sass.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "Bootstrap",
    image: "/img/bootstrap.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "Tailwind",
    image: "/img/tailwind.png",
    category: "Front-End",
  },
  {
    key: Math.random(),
    name: "Laravel",
    image: "/img/laravel.png",
    category: "Back-End",
  },
  {
    key: Math.random(),
    name: "NodeJS",
    image: "/img/node-js.png",
    category: "Back-End",
  },
  {
    key: Math.random(),
    name: "PHP",
    image: "/img/php.png",
    category: "Back-End",
  },
  {
    key: Math.random(),
    name: "MongoDB",
    image: "/img/mongo-db.png",
    category: "Databases",
  },
  {
    key: Math.random(),
    name: "MySQL",
    image: "/img/mysql.png",
    category: "Databases",
  },
  {
    key: Math.random(),
    name: "Amazon RDS",
    image: "/img/amazon-rds.png",
    category: "Databases",
  },
  {
    key: Math.random(),
    name: "Google Firebase",
    image: "/img/firebase.png",
    category: "Databases",
  },
  {
    key: Math.random(),
    name: "Amazon AWS",
    image: "/img/aws.png",
    category: "Cloud",
  },
  {
    key: Math.random(),
    name: "Digital Ocean",
    image: "/img/digital-ocean.png",
    category: "Cloud",
  },
  {
    key: Math.random(),
    name: "Vercel",
    image: "/img/vercel.png",
    category: "Cloud",
  },
  {
    key: Math.random(),
    name: "Heroku",
    image: "/img/heroku.png",
    category: "Cloud",
  },
  {
    key: Math.random(),
    name: "GitHub",
    image: "/img/github.png",
    category: "Team Tools",
  },
  {
    key: Math.random(),
    name: "Gitlab",
    image: "/img/gitlab.png",
    category: "Team Tools",
  },
  {
    key: Math.random(),
    name: "Jira",
    image: "/img/jira.png",
    category: "Team Tools",
  },
  {
    key: Math.random(),
    name: "Slack",
    image: "/img/slack.png",
    category: "Team Tools",
  },
  {
    key: Math.random(),
    name: "Asana",
    image: "/img/asana.png",
    category: "Team Tools",
  },
  {
    key: Math.random(),
    name: "Meister",
    image: "/img/meister.png",
    category: "Team Tools",
  },
  {
    key: Math.random(),
    name: "Wordpress",
    image: "/img/wordpress.png",
    category: "CMS",
  },
  {
    key: Math.random(),
    name: "WooCommerce",
    image: "/img/woocommerce.png",
    category: "CMS",
  },
  {
    key: Math.random(),
    name: "Shopify",
    image: "/img/shopify.png",
    category: "CMS",
  },
  {
    key: Math.random(),
    name: "Magento",
    image: "/img/magento.png",
    category: "CMS",
  },
  {
    key: Math.random(),
    name: "Webflow",
    image: "/img/webflow.png",
    category: "CMS",
  },
  {
    key: Math.random(),
    name: "Zoho",
    image: "/img/zoho.png",
    category: "CRM",
  },
  {
    key: Math.random(),
    name: "HubSpot",
    image: "/img/hubspot.png",
    category: "CRM",
  },
  {
    key: Math.random(),
    name: "Zapier",
    image: "/img/zapier.png",
    category: "CRM",
  },
  {
    key: Math.random(),
    name: "HotJar",
    image: "/img/hotjar.png",
    category: "CRM",
  },
  {
    key: Math.random(),
    name: "Google Analytics",
    image: "/img/analytics.png",
    category: "CRM",
  },
  {
    key: Math.random(),
    name: "Facebook Pixel",
    image: "/img/facebook-pixel.png",
    category: "CRM",
  },
  {
    key: Math.random(),
    name: "Photoshop",
    image: "/img/photoshop.png",
    category: "Graphic Design",
  },
  {
    key: Math.random(),
    name: "Illustrator",
    image: "/img/illustrator.png",
    category: "Graphic Design",
  },
  {
    key: Math.random(),
    name: "Premiere",
    image: "/img/premiere.png",
    category: "Graphic Design",
  },
  {
    key: Math.random(),
    name: "XD",
    image: "/img/xd.png",
    category: "Graphic Design",
  },
  {
    key: Math.random(),
    name: "Figma",
    image: "/img/figma.png",
    category: "Graphic Design",
  },
  {
    key: Math.random(),
    name: "Zeplin",
    image: "/img/zeplin.png",
    category: "Graphic Design",
  },
  {
    key: Math.random(),
    name: "ProTools",
    image: "/img/protools.png",
    category: "Music Production",
  },
  {
    key: Math.random(),
    name: "Cubase",
    image: "/img/cubase.png",
    category: "Music Production",
  },
  {
    key: Math.random(),
    name: "Logic",
    image: "/img/logic.png",
    category: "Music Production",
  },
  {
    key: Math.random(),
    name: "Live",
    image: "/img/live.png",
    category: "Music Production",
  },
];

export default STACK;