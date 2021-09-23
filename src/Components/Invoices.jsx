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
            <ProfileDescription>
              <Name>Madison Rogers</Name>
              <Company>Acme Widgets, LLC</Company>
            </ProfileDescription>
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
            <ProfileDescription>
              <Name> Hailey Renee</Name>
              <Company> DynaCore Systems, Inc.</Company>
            </ProfileDescription>
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

const Profile = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 4rem;
  }
`;

const ProfileDescription = styled.div`
  margin-left: 1rem;
`;

const Name = styled.h4``;

const Company = styled.h5`
  font-weight: 400;
`;

export default Invoices;
