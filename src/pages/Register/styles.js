import styled, { css } from 'styled-components/native';
import theme from '../../theme';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #191919;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 12px 20px;
  width: 100%;
  padding: 0 20px ${Platform.OS === 'android' ? 150 : 100}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 12px;
`;

export const Icon = styled(Feather)`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: ${theme.fonts.light};
`;

export const Scope = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${theme.colors.title};
  font-family: ${theme.fonts.medium};
  text-transform: uppercase;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background: #222;
  border-radius: 4px;
  margin-top: 8px;
  padding: 0 15px;
  color: #fff;
  font-size: 14px;
  font-family: ${theme.fonts.medium};

  ${props => props.isFilled && css`
    border-width: 1px;
    border-color: ${theme.colors.primary};
  `};
`;


