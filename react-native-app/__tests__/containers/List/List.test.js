import React from 'react';
import renderer from 'react-test-renderer';
import List from '../../../src/containers/List/List';

const expenses = [
  {
    "category": "Shopping",
    "createdAt": 1540794533773,
    "amount": 6,
    "subCategory": "House",
    "id": "bb7efe31-eb16-11e8-a950-55540a854d1b",
    "updatedAt": 1540794533773
  },
  {
    "category": "Food",
    "createdAt": 1540787039410,
    "amount": 3,
    "subCategory": "Office Meal",
    "id": "bb7f2540-eb16-11e8-a950-55540a854d1b",
    "updatedAt": 1540787039410
  },
  {
    "category": "Transport",
    "createdAt": 1540770980577,
    "amount": 15,
    "subCategory": "Taxi",
    "id": "bb7f2541-eb16-11e8-a950-55540a854d1b",
    "updatedAt": 1540770980577
  }
];

it('renders without crashing', () => {
  const rendered = renderer.create(<List expenses={expenses} />).toJSON();
  expect(rendered).toBeTruthy();
});
