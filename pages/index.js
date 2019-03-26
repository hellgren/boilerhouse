import React from "react";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Homepage = () => {
  return (
    <Wrapper>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Wrapper>
  );
};

export default Homepage;
