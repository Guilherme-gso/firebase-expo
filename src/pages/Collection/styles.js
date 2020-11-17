import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.background};
  padding: 0 15px;
`;

export const Header = styled.View`
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: ${theme.fonts.light};
  margin-top: 50px;
`;

export const List = styled(FlatList)`
  flex: 1;
  margin-top: 40px;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #222;
  padding: 10px 15px;;
  border-radius: 4px;
`;

export const ImageContent = styled.View`
  height: 70px;
  width: 70px;
`;

export const DataContent = styled.View`
  margin-left: 20px;
`;

export const ItemName = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: ${theme.fonts.bold};
`;

export const ItemOwner = styled.Text`
  font-size: 14px;
  color: #ccc;
  font-family: ${theme.fonts.medium};
`;

export const ItemDate = styled.Text`
  font-size: 12px;
  color: #ccc;
  font-family: ${theme.fonts.regular};
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;

export const Action = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
  margin-right: 5px;
`;