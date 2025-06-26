import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong>Gustavo Barth</strong>
                    <span>@gustavobarth</span>
                    <Dot />
                    <time>01 de set</time>
                </Header>

                <Description>Foguete não tem ré</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        18
                    </Status>
                    <Status>
                        <RetweetIcon />
                        77
                    </Status>
                    <Status>
                        <LikeIcon />
                        999
                    </Status>
                </Icons>
            </Content>
        </Body>

    </Container>
  )
}

export default Tweet;