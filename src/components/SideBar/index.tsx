import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter" />
            <SearchIcon />
        </SearchWrapper>

        <Body>
            <List 
              title="Talvel você curta"
              elements={[ 
                <FollowSuggestion 
                  name="Gustavo Barth"
                  nickname="@barth_gustavo"
                />,
                <FollowSuggestion 
                  name="Gustavo Barth"
                  nickname="@barth_gustavo"
                />,
                <FollowSuggestion 
                  name="Gustavo Barth"
                  nickname="@barth_gustavo"
                />
              ]}
            />
            <List 
              title="Talvel você curta"
              elements={[
                <News />,
                <News />,
                <News />
              ]}
            />,
            <List 
              title="Talvel você curta"
              elements={[
                <News />,
                <News />,
                <News />
              ]}
            />,
            <List 
              title="Talvel você curta"
              elements={[
                <News />,
                <News />,
                <News />
              ]}
            />
            
        </Body>
    </Container>
  );
}

export default SideBar;