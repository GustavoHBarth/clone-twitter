import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Gustavo Barth</h1>
            <h2>@barth_gustavo</h2>

            <p>
                Developer at <a href="https://www.linkedin.com/in/gustavo-henrique-barth/">@GustavoBarth</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Minas Gerais, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 01 de setembro de 2001
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>77</strong>
                </span>
                <span>
                     <strong>798 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed /> 
    </Container>
  )
}

export default ProfilePage;