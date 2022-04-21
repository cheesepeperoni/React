import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components';

interface coinIdParams {
coinId:string;
}

interface RouteState{
  name:string;
}
const Container = styled.div`
  padding:0px 20px;
  max-width: 480px;
  margin:auto;
`;

const Header = styled.div`
  height:10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:20px;
`;
const Title = styled.h1`
  font-size: 48px;
  color:${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<coinIdParams>();
  const { state } = useLocation<RouteState>();
console.log(state.name)
  return (
  <Container>
    <Header>
      <Title>{state?.name || "Loading"}</Title>
    </Header>
    {loading ? <Loader>"...Loading"</Loader>:null}
  </Container>
  )}

  export default Coin