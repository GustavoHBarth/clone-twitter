import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
 display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: var(--primary);

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;
