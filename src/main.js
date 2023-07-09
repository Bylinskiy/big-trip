import HeaderPresenter from './presenter/header-presenter';
import MainPresenter from './presenter/main-presenter';

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');

const headerPresenter = new HeaderPresenter();
const mainPresenter = new MainPresenter();

headerPresenter.init(siteHeaderElement);
mainPresenter.init(siteMainElement);
