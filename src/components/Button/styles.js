import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background: ${theme.colors.primary};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  font-family: ${theme.fonts.bold};
`;
