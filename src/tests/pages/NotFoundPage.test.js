import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "./NotFoundPage";
import { Link } from "react-router-dom";
import { Button } from "antd";
import 'matchmedia-polyfill';


describe("NotFoundPage", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotFoundPage />);
  });

  it("should render a heading with text '404 - Not Found'", () => {
    expect(wrapper.find("h1").text()).toEqual("404 - Not Found");
  });

  it("should render a paragraph with text 'The page you are looking for does not exist.'", () => {
    expect(wrapper.find("p").text()).toEqual("The page you are looking for does not exist.");
  });

  it("should render a Link component to the home page", () => {
    const link = wrapper.find(Link);
    expect(link).toHaveLength(1);
    expect(link.prop("to")).toEqual("/");
  });

  it("should render a Button component inside the Link component", () => {
    const link = wrapper.find(Link);
    const button = link.find(Button);
    expect(button).toHaveLength(1);
    expect(button.prop("type")).toEqual("primary");
    expect(button.text()).toEqual("Go to Home Page");
  });
});
