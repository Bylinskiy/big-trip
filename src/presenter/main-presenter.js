import { render } from '../render';
import { POINT_COUNT } from '../constantes';

import MainSortView from '../view/main/main-sort-view';
import MainListContainerView from '../view/main/main-list-container-view';
import MainListContainerItemView from '../view/main/main-list-container-item-view';
import MainPointView from '../view/main/main-point-view';
import MainFormEditView from '../view/main/main-form-edit-view';


export default class MainPresenter {
  mainListContainer = new MainListContainerView();
  mainSortView = new MainSortView();
  init = (container) => {
    this.container = container;
    this.tripEventsContainer = this.container.querySelector('.trip-events');
    //Add sort form
    render(this.mainSortView, this.tripEventsContainer);
    //Add list container
    render(this.mainListContainer, this.tripEventsContainer);
    //Add items
    for (let i = 0; i < POINT_COUNT; i++) {
      const listContainerItem = new MainListContainerItemView();
      render(listContainerItem, this.mainListContainer.getElement());
      if (i === 1) {
        render(new MainFormEditView(), listContainerItem.getElement());
      } else {
        render(new MainPointView(), listContainerItem.getElement());
      }
    }
  };
}
