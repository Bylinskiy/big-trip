import { createElement } from '../../render.js';
import { humanizeDate } from '../../utils.js';
import { DATE_FORMAT } from '../../constants.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const createMainPointOffersTemplate = (pointOffers) => (
  `<h4 class="visually-hidden">Offers:</h4>
  ${pointOffers.length > 0 ? `
    <ul class="event__selected-offers">
      ${pointOffers.map(({ title, price }) => `
        <li class="event__offer">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </li>
      `).join('')}
    </ul>
  ` : ''}
  `
);

const createMainPointTemplate = (point, pointDestination, pointOffers) => {
  const {dateFrom, dateTo, basePrice, isFavorite, type} = point;
  const dateFromFull = humanizeDate(dateFrom, DATE_FORMAT.dateFull);
  const dateToFull = humanizeDate(dateTo, DATE_FORMAT.dateFull);
  const dateFromShort = humanizeDate(dateFrom, DATE_FORMAT.dateShort);
  const timeFrom = humanizeDate(dateFrom, DATE_FORMAT.time);
  const timeTo = humanizeDate(dateTo, DATE_FORMAT.time);

  const getTimeDifference = () => {
    const durationInMinutes = dayjs(dateTo).diff(dateFrom, 'minutes');
    const durationInDetails = dayjs.duration(durationInMinutes, 'minutes');

    const days = durationInDetails.days();
    const hours = durationInDetails.hours();
    const minutes = durationInDetails.minutes();

    let formattedDuration = '';
    if (days > 0) {
      formattedDuration += `${days}D `;
    }
    if (hours > 0) {
      formattedDuration += `${hours}H `;
    }
    formattedDuration += `${minutes}M`;

    return formattedDuration.trim();
  };

  const favoriteStatus = isFavorite ? 'event__favorite-btn--active' : '';
  const pointOffersData = createMainPointOffersTemplate(pointOffers);

  return (`
  <div class="event">
  <time class="event__date" datetime="${dateFromFull}">${dateFromShort}</time>
  <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event ${type}">
  </div>
  <h3 class="event__title">${pointDestination.name}</h3>
  <div class="event__schedule">
      <p class="event__time">
          <time class="event__start-time" datetime="${dateFromFull}T${timeFrom}">${timeFrom}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateToFull}T${timeTo}">${timeTo}</time>
      </p>
      <p class="event__duration">${getTimeDifference()}</p>
  </div>
  <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
  ${pointOffersData}
  <button class="event__favorite-btn ${favoriteStatus}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
  </button>
  <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
  </button>
</div>
`);
};


export default class MainPointView {
  constructor({point, pointDestination, pointOffers}){
    this.point = point;
    this.pointDestination = pointDestination;
    this.pointOffers = pointOffers;
  }

  getTemplate() {
    return createMainPointTemplate(this.point, this.pointDestination, this.pointOffers);
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
