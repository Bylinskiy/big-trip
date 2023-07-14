const POINT_COUNT = 10;

const POINT_EMPTY = {
  id: null,
  type: 'taxi',
  dateFrom: '',
  dateTo: '',
  destination: '',
  basePrice: 0,
  isFavorite: null,
  offers: []
};

const DATE_FORMAT = {
  datePlusTime: 'DD/MM/YY HH:mm',
  dateShort: 'MMM D',
  dateFull: 'YYYY-MM-DD',
  time: 'HH:mm'
};

export {POINT_COUNT, POINT_EMPTY, DATE_FORMAT};
