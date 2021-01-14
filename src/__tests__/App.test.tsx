import React from 'react';
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App loads", () => {
  const wrapper = shallow(<App />);
  const text = wrapper.find("a").text();
  expect(text).toEqual("Learn React");
});
