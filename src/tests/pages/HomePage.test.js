import React from "react";
import { shallow } from "enzyme";
import HomePage from '../../pages/HomePage';
import 'matchmedia-polyfill';


describe("HomePage", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("should render a title", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("should render a paragraph", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });

  it("should display the correct title", () => {
    const title = wrapper.find("h1");
    expect(title.text()).toEqual("Bem vindo ao Calldex!");
  });

  it("should display the correct paragraph text", () => {
    const paragraph = wrapper.find("p");
    expect(paragraph.text()).toContain("Bem-vindo ao Calldex");
  });
});
