import { render } from '../render';

import MainSortView from '../view/main/main-sort-view';
import MainListContainerView from '../view/main/main-list-container-view';
import MainListContainerItemView from '../view/main/main-list-container-item-view';
import MainPointView from '../view/main/main-point-view';
import MainFormView from '../view/main/main-form-view';


export default class MainPresenter {
  mainListContainer = new MainListContainerView();
  mainSortView = new MainSortView();
  constructor ({mainContainer, tripsModel}) {
    this.mainContainer = mainContainer;
    this.tripsModel = tripsModel;
  }

  init = () => {
    this.tripEventsContainer = this.mainContainer.querySelector('.trip-events');
    this.tripPoints = [... this.tripsModel.getPoints()];
    this.tripOffers = [... this.tripsModel.getOffers()];
    this.tripDestinations = [... this.tripsModel.getDestinations()];
    //Add sort form
    render(this.mainSortView, this.tripEventsContainer);
    //Add list container
    render(this.mainListContainer, this.tripEventsContainer);


    //Add items
    for (let i = 0; i < this.tripPoints.length; i++) {
      const listContainerItem = new MainListContainerItemView();
      render(listContainerItem, this.mainListContainer.getElement());
      if (i === 0) {
        render(new MainFormView({
          point:this.tripPoints[i],
          pointDestination: this.tripsModel.getDestinationById(this.tripPoints[i].destination),
          tripOffers: this.tripOffers,
          tripDestinations: this.tripDestinations
        }), listContainerItem.getElement());
      } else {
        render(new MainPointView({
          point:this.tripPoints[i],
          pointDestination: this.tripsModel.getDestinationById(this.tripPoints[i].destination),
          pointOffers: this.tripsModel.getOffersById(this.tripPoints[i].type, this.tripPoints[i].offers)
        }), listContainerItem.getElement());
      }
    }
  };
}
