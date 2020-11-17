import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';

import { Container, Title, Subtitle } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const { navigate } = useNavigation();

  return(
    <Container>
      <Feather name="bookmark" size={100} color="#fff" />
      <Title>Seja bem vindo ao APP!</Title>
      <Subtitle>Consulte sua coleção</Subtitle>
      <Button onPress={() => navigate('Collection')}>Coleção</Button>
    </Container>
  );
}

export default Home;