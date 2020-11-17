import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import Button from '../../components/Button';
import { useRoute, useNavigation } from '@react-navigation/native';
import { db } from '../../config/firebase';
import { Alert } from 'react-native';

function Register() {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const itemId = params.param.id;

    db.collection('items').doc(itemId).get().then(item => {
      setItem({ ...item.data(), id: item.id })
    });
  }, []);

  const submit = async () => {
    if(!item.name || !item.owner || !item.year || !item.uri) {
      Alert.alert(
        'Erro ao cadastrar!',
        'Os campos não podem ser vazios'
      );
      return;
    }

    try {
      setLoading(true);
      await db.collection('items').doc(item.id).set({
        name: item.name,
        owner: item.owner,
        year: item.year,
        uri: item.uri,
      }, { merge: true })
    } catch(err) {
      Alert.alert(
        'Erro ao cadastrar!',
        `${err}`
      );
    } finally {
      setLoading(false);
    }

    navigate('Collection'); 
  };

  return(
    <Styled.Container
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Styled.Content
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Styled.Header>
        <Styled.Title>{item.name}</Styled.Title>
        </Styled.Header>
        <Styled.Scope>
          <Styled.Label>URL da imagem</Styled.Label>
          <Styled.Input 
            isFilled={!!item.uri}
            autoCapitalize="none"
            autoCorrect={false}
            value={item.uri}
            onChangeText={value => setItem({...item, uri: value})}
          />
        </Styled.Scope>
        <Styled.Scope>
          <Styled.Label>Título</Styled.Label>
          <Styled.Input
            isFilled={!!item.name}
            autoCapitalize="none"
            autoCorrect={false}
            value={item.name}
            onChangeText={value => setItem({...item, name: value})}
          />
        </Styled.Scope>
        <Styled.Scope>
          <Styled.Label>Autor/Criador</Styled.Label>
          <Styled.Input 
            isFilled={!!item.owner}
            autoCapitalize="none"
            autoCorrect={false}
            value={item.owner}
            onChangeText={value => setItem({...item, owner: value})}
          />
        </Styled.Scope>
        <Styled.Scope>
          <Styled.Label>Ano de lançamento</Styled.Label>
          <Styled.Input 
            isFilled={!!item.year}
            autoCapitalize="none"
            autoCorrect={false}
            value={item.year}
            keyboardType="numeric"
            onChangeText={value => setItem({...item, year: value})}
          />
        </Styled.Scope>

        <Styled.ButtonContainer>
          <Button onPress={submit}>
            {loading ? 'Carregando...' : 'Atualizar'}
          </Button>
        </Styled.ButtonContainer>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Register;