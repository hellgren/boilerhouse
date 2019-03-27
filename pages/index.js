import React from "react";
import styled from "@emotion/styled";
import BaseLayout from "components/layouts/Base";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 100%;
`;

const Headline = styled.div`
  color: white;
  font-size: 40px;
  padding: 20px;
`;

const Homepage = () => {
  return (
    <BaseLayout>
      <Wrapper>
        <Headline>Boilerhouse</Headline>
      </Wrapper>
    </BaseLayout>
  );
};

export default Homepage;
