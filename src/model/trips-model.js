import { getRandomPoint } from '../mock/points';
import { generateDestinations } from '../mock/destinations';
import { generateOffers } from '../mock/offers';
import { POINT_COUNT } from '../constants';

export default class TripsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);
  destinations = generateDestinations();
  offers = generateOffers();

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getOffersById(type, offerIds) {
    const offersByType = this.offers.find((offer) => offer.type === type).offers;
    const result = offerIds.map((offerId) => offersByType.find((offer) => offer.id === offerId));

    return result;
  }

  getDestinationById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
