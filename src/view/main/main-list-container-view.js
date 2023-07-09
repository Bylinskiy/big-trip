import { createElement } from '../../render.js';

function createMainListContainerTemplate() {
  return `
  <ul class="trip-events__list"></ul>
`;
}

export default class MainListContainerView {
  getTemplate() {
    return createMainListContainerTemplate;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
