const t1 = gsap.timeline();
const signBtn = document.querySelector(".sign-up");

signBtn.addEventListener("click", () => {
  t1.to(".clip-path", 0.8, {
    position: "absolute",
    clipPath: "circle(89.6% at 100% 18%)",
    x: 611,
    backgroundColor: "transparency",
    filter: "blur(4px)",
    // x: 600,
  })
    .to(
      ".items",
      0.8,
      {
        xPercent: -100,
        opacity: 0,
        display: "none",
      },
      "-=0.7"
    )
    .fromTo(
      ".user-mail",
      0.8,
      {
        display: "none",
      },
      { display: "flex" },
      "-=0.6"
    )
    .to(".form-container", 0.8, { xPercent: -100 }, "-=0.5")
    .fromTo(
      ".sng",
      0.8,
      { xPercent: 120, display: "none" },
      { xPercent: 80, display: "block", zIndex: 999 }
    );
});
