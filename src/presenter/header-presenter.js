import { render, RenderPosition } from '../render';
import HeaderInfoView from '../view/header/header-info-view';
import HeaderFiltersView from '../view/header/header-filters-view';

export default class HeaderPresenter {
  headerInfo = new HeaderInfoView();
  headerFilter = new HeaderFiltersView();
  init = (container) => {
    this.container = container;

    render(this.headerInfo, this.container.querySelector('.trip-main'), RenderPosition.AFTERBEGIN);
    render(this.headerFilter, this.container.querySelector('.trip-controls__filters'));
  };
}
