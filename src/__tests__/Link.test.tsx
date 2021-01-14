import React from 'react';
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Link from '../Link';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Link page="facebook.com">Facebook</Link>, div);
  ReactDOM.unmountComponentAtNode(div);
});
