const customElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  content: "Click me to visit google",
};

function creatCustom(customElement, root) {
  //   const element = document.createElement(customElement.type);
  //   element.innerHTML = customElement.content;
  //   element.setAttribute("href", customElement.props.href);
  //   element.setAttribute("target", customElement.props.target);
  //   root.appendChild(element);
  const element = document.createElement(customElement.type);
  element.innerHTML = customElement.content;
  for (const prop in customElement.props) {
    if (prop === "content") continue;
    element.setAttribute(prop, customElement.props[prop]);
  }
  root.appendChild(element);
}

const root = document.querySelector("#root");
creatCustom(customElement, root);
