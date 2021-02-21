import {defaultStyles, defaultTitle} from '@/constans';
import {clone} from '@core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON(),

};

const normalise = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
});

export function normaliseInitialState(state) {
  return state ? normalise(state) : clone(defaultState);
}
