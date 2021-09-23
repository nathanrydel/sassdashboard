import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import { cardShadow, hoverEffect, themeColor } from '../utils';

function info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit> 98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>In top 15%</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>28</Digit>
            <InfoContainer>
              <Title>Projects</Title>
              <SubTitle>4 this month</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content='mobile app' glow />
            <Badge content='branding' glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 12rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.5rem 1rem 0.3rem 1rem;
`;

const InfoContainer = styled.div`
  margin-left: 1rem;
`;

const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  ${({ justify }) =>
    justify &&
    `
    justify-content: space-around;
    width: 90%
  `}
`;

const Title = styled.h3`
  color: black;
`;

const SubTitle = styled.h5`
  color: #333;
  font-weight: normal;
`;

// const InfoCard = styled.div``;

export default info;
