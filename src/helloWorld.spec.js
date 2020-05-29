import React from "react";
import { mount } from "cypress-react-unit-test";

function test(a) {
  return a;
}

const HelloWorld = (props) => {
  return (
    <div>
      <p>{test(10)}</p>
      {props.show ? <p>Hello World!</p> : <p>YOU ARE NOT DESERVED HELLO WORLD!!!!</p>}
    </div>
  );
};

describe("HelloWorld component", () => {
  it("works", () => {
    mount(<HelloWorld />);
    // now use standard Cypress commands
    cy.contains("Hello World!").should("not.be.visible");
  });
});
