import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import { cardShadow, hoverEffect, themeColor } from '../utils';

function info() {
  return (
    <infoCard>
      <Card>
        <CardConent>
          <Row>
            <Digit> 98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>In top 15%</SubTitle>
            </InfoContainer>
          </Row>
        </CardConent>
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
    </infoCard>
  );
}

export default info;
