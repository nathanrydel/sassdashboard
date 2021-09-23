import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import ProfileImage from '../assets/ProfileImage05';
import ProfileImage2 from '../assests/ProfileImage06';
import { cardShadow, hoverEffect } from '..//utils';

function Invoices() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Profile>
              <img src={ProfileImage} alt='profile for account' />
            </Profile>
            <TextContainer>
              <Title>Madison Rogers</Title>
              <SubTitle>Acme Widgets, LLC</SubTitle>
            </TextContainer>
          </Info>
          <StatusContainer>
            <Badge content='Paid' paid />
            <Price>$ 1483.47</Price>
          </StatusContainer>
        </Invoice>
        <Invoice>
          <Info>
            <Profile>
              <img src={ProfileImage2} alt='profile for account' />
            </Profile>
            <TextContainer>
              <Title> Hailey Renee</Title>
              <SubTitle> DynaCore Systems, Inc.</SubTitle>
            </TextContainer>
          </Info>
          <StatusContainer>
            <Badge content='Late' late />
            <Price>$ 1950.87</Price>
          </StatusContainer>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
}

const InvoicesContainer = styled.div`
  width: 40rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 135%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div``;

const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.5rem;
  padding-top: 0.6rem;
`;

const StatusContainer = styled.div``;

const Price = styled.div``;

const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Profile = styled.div``;

const TextContainer = styled.div``;

const Title = styled.h4``;

const SubTitle = styled.h5``;

//const InvoicesContainer = styled.div``;

export default Invoices;
