import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottonMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>
        
            <ProfileInfo>
                <strong>Gustavo Barth</strong>
                <span>612 Tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage />

        <BottonMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottonMenu>
    </Container>
  );
}

export default Main;