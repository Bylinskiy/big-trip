import { createElement } from '../../render.js';
import { humanizeDate } from '../../utils.js';
import { DATE_FORMAT, POINT_EMPTY } from '../../constants.js';

const createDestinationListTemplate = (tripDestinations) => `
  <datalist id="destination-list-1">
  ${tripDestinations.map(({name}) => (`<option value="${name}"></option>`)).join('')}
  </datalist>
`;

const createTypesGroupTemplate = (tripOffers) => (
  `<fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>

        ${tripOffers.map(({ type }) => `<div class="event__type-item">
          <input id="event-type-${type}-1" class="event__type-input visually-hidden" type="radio" name="event-type" value="${type}">
          <label class="event__type-label event__type-label--${type}" for="event-type-${type}-1">${type[0].toUpperCase()}${type.slice(1)}</label>
      </div>`).join('')}
    </fieldset>`
);

const createMainFormHeaderTemplate = (point, pointDestination, tripOffers, tripDestinations) => {
  const {type, dateFrom, dateTo, basePrice} = point;
  const {name = ''} = pointDestination;
  const destinationList = createDestinationListTemplate(tripDestinations);
  const typeGroup = createTypesGroupTemplate(tripOffers);
  const datePlusTimeFrom = humanizeDate(dateFrom, DATE_FORMAT.datePlusTime);
  const datePlusTimeTo = humanizeDate(dateTo, DATE_FORMAT.datePlusTime);

  return `
  <header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="${type}">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
    ${typeGroup}
    </div>
  </div>

  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
    ${type}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
      ${destinationList}
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${datePlusTimeFrom}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${datePlusTimeTo}">
  </div>

  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
  </div>

  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Cancel</button>
</header>
  `;
};

const createMainFormOffersTemplate = (point, tripOffers) => {
  const offersByType = tripOffers.find((offer) => offer.type === point.type).offers;

  return `
  ${offersByType.length > 0 ? `
  <section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">
  ${offersByType.map(({id, title, price}) => `
  <div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${point.type}-1" type="checkbox" name="event-offer-${point.type}" ${point.offers.includes(id) ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-luggage-1">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </label>
</div>
  `).join('')}
  </div>
</section>
  ` : ''
}

  `;
};

const createMainFormDestinationTemplate = (point, pointDestination, tripDestinations) => {
  const destinationsByPoint = tripDestinations.find((destination) => destination.id === point.destination);
  const {description = ''} = pointDestination;
  return `
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">${destinationsByPoint.name}</h3>
    <p class="event__destination-description">${description}</p>
    ${destinationsByPoint.pictures.length > 0 ? `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${destinationsByPoint.pictures.map(({ src, picDescription }) => `<img class="event__photo" src=${src} alt=${picDescription}>`).join('')}
      </div>
    </div>
    ` : ''}
  </section>
  `;
};

const createMainFormTemplate = (point, pointDestination, tripOffers, tripDestinations) => {
  const header = createMainFormHeaderTemplate(point, pointDestination, tripOffers, tripDestinations);
  const offers = createMainFormOffersTemplate(point, tripOffers);
  const destination = createMainFormDestinationTemplate(point, pointDestination, tripDestinations);
  return `
  <form class="event event--edit" action="#" method="post">
    ${header}
  <section class="event__details">
    ${offers}
    ${destination}

  </section>
</form>
`;
};

export default class MainFormView {
  constructor({point = POINT_EMPTY, pointDestination, tripOffers, tripDestinations}) {
    this.point = point;
    this.pointDestination = pointDestination ? pointDestination : POINT_EMPTY.destination;
    this.tripOffers = tripOffers;
    this.tripDestinations = tripDestinations;
  }

  getTemplate() {
    return createMainFormTemplate(this.point, this.pointDestination, this.tripOffers, this.tripDestinations);
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
