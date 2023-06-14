import styled from 'styled-components/native';

interface Props {
  isLogin?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const Wrapper = styled.View<Props>`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;

  ${props => props.isLogin && `
    justify-content: space-between;
  `}
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #47474D;
`;