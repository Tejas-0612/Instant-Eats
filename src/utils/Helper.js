export const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToComponent = () => {
  const targetElement = document.getElementById("body-component");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }
};
