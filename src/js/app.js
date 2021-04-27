import barba from "@barba/core";
import barbaCss from "@barba/css";

barba.use(barbaCss);

const body = document.querySelector("body");
barba.hooks.before((data) => {
  const bgColor = data.current.container.dataset.background;
  body.style.setProperty("--page-background", bgColor);
});

barba.init({
  transitions: [
    {
      name: "home",
      to: {
        namespace: ["home"],
      },
      sync: true,
      once() {},
      leave() {},
      enter() {},
    },
    {
      name: "fade",
      to: {
        namespace: ["fade"],
      },
      leave() {},
      enter() {},
    },
    {
      name: "clip",
      sync: true,
      to: {
        namespace: ["clip"],
      },
      leave() {},
      enter() {},
    },
    {
      name: "with-cover",
      to: {
        namespace: ["with-cover"],
      },
      leave() {},
      enter() {},
    },
  ],
});
