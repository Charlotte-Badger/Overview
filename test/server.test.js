const app = require("../server/server.js")
const path = require('path');
const db = require('../database/overview.js');
const f = require('fixtures');
const React = require('react');
const renderer = require ('react-test-renderer');
const App = require('../public/overview.js');

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

jest.mock('axios');


test ('API endpoint returns mock data', async () => {
  axios.get.mockResolvedValue(f.entry);
  const data = await App.getOverview(1);
  expect(data).toBe(f.entry);
});

