class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log("Its working");
  }
}

customElements.define("uc-tooltip", Tooltip);
