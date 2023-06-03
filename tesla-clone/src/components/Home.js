import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        description="Order online for touchless delivery"
        title="Model S"
        imageURL="model-s.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        description="Order online for touchless delivery"
        title="Model X"
        imageURL="model-x.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        description="Order online for touchless delivery"
        title="Model Y"
        imageURL="model-y.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        description="Money Back Guarantee"
        title="Lowest Cost Solar Penals in America"
        imageURL="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
       <Section
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        title="Solar For New Roofs"
        imageURL="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
