import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color:${(props)=>props.theme.textColor}
`;

function App() {
  return (
   <Container>
    <H1>HI!</H1>
   </Container>
  );
}

export default App;
