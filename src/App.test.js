import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  shallow(<App />);
});

it("correct position and facing after move to north 3 times and est 2 times", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  //Place
  wrapper.setState({
    bus: {
      positionX: 1,
      positionY: 1,
      face: "north",
      placed: false
    },
    error: "",
    showReport: false
  });

  //Move & Rotate
  instance.handleMove();
  instance.handleMove();
  instance.handleMove();
  instance.handleRotate({ target: { name: "right" } });
  instance.handleMove();
  instance.handleMove();

  expect(wrapper.state().bus.positionX).toEqual(3);
  expect(wrapper.state().bus.positionY).toEqual(4);
  expect(wrapper.state().bus.face).toEqual("east");
});

it("Bus never leave the carpark", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  wrapper.setState({
    bus: {
      positionX: 0,
      positionY: 0,
      face: "west",
      placed: false
    },
    error: "",
    showReport: false
  });

  instance.handleMove();
  expect(wrapper.state().error).toEqual(
    "You can’t go further west! Please stay in the carpark."
  );
  expect(wrapper.state().bus.positionX).toEqual(0);

  wrapper.setState({
    bus: {
      positionX: 4,
      positionY: 0,
      face: "east",
      placed: false
    },
    error: "",
    showReport: false
  });

  instance.handleMove();
  expect(wrapper.state().error).toEqual(
    "You can’t go further east! Please stay in the carpark."
  );
  expect(wrapper.state().bus.positionX).toEqual(4);

  wrapper.setState({
    bus: {
      positionX: 4,
      positionY: 4,
      face: "north",
      placed: false
    },
    error: "",
    showReport: false
  });

  instance.handleMove();
  expect(wrapper.state().error).toEqual(
    "You can’t go further north! Please stay in the carpark."
  );
  expect(wrapper.state().bus.positionY).toEqual(4);

  wrapper.setState({
    bus: {
      positionX: 2,
      positionY: 0,
      face: "south",
      placed: false
    },
    error: "",
    showReport: false
  });

  instance.handleMove();
  expect(wrapper.state().error).toEqual(
    "You can’t go further south! Please stay in the carpark."
  );
  expect(wrapper.state().bus.positionY).toEqual(0);
});
