import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${theme.colors.title};
  font-family: ${theme.fonts.medium};
  margin-top: 40px;
`;

export const Subtitle = styled.Text`
  font-size: 22px;
  color: ${theme.colors.subtitle};
  font-family: ${theme.fonts.regular};
  margin-bottom: 20px;
`;
