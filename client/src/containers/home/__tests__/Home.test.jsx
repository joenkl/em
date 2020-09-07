import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Home from '../Home';
import { Provider } from 'react-redux';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => new Promise(resolve => resolve ({})),
  getState: () => ({ ...state })
})

const store = storeFake({})

test('Home page should render correctly', () => {
  const elem = ReactTestRenderer.create(
    <Provider store={store}>
      <Home />
    </Provider>
  )

  const tree = elem.toJSON()
  expect(tree).toMatchSnapshot()
})