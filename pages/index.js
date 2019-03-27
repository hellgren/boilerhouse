import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: lightgrey;
  padding: 20px;
`;

const Homepage = () => {
  return (
    <Wrapper>
      <Button>Hello World</Button>
    </Wrapper>
  );
};

export default Homepage;
