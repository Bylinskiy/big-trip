import { createElement } from '../../render.js';

function createMainListContainerItemTemplate() {
  return `
  <li class="trip-events__item"></li>
`;
}

export default class MainListContainerItemView {
  getTemplate() {
    return createMainListContainerItemTemplate;
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
