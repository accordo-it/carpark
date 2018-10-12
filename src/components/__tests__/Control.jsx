import React from "react";
import { shallow } from "enzyme";
import Control from "./../Control";

describe("<Control />", () => {
  it("All control buttons are disabled before the bus placed", () => {
    const wrapper = shallow(<Control />);
    wrapper.find("button").forEach(node => {
      expect(node.props().disabled).toEqual(true);
    });
  });

  //   it("All control buttons are available after the bus is placed", () => {
  //     const wrapper = shallow(<Control />);
  //     wrapper
  //       .setProps({
  //         data: {
  //           positionX: 0,
  //           positionY: 0,
  //           face: "north",
  //           placed: true
  //         }
  //       })
  //       .find("button")
  //       .forEach(node => {
  //         expect(node.props().disabled).toEqual(false);
  //       });
  //   });
});
