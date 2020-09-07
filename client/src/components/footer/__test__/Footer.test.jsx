import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Footer from '../Footer';

test('Home page should render correctly', () => {
  const elem = ReactTestRenderer.create(
      <Footer />
  )

  const tree = elem.toJSON()
  expect(tree).toMatchSnapshot()
})