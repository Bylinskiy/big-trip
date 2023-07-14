import HeaderPresenter from './presenter/header-presenter';
import MainPresenter from './presenter/main-presenter';
import TripsModel from './model/trips-model';

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');

const tripsModel = new TripsModel();
const headerPresenter = new HeaderPresenter();
const mainPresenter = new MainPresenter({
  mainContainer: siteMainElement,
  tripsModel
});

headerPresenter.init(siteHeaderElement);
mainPresenter.init();
