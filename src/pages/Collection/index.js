import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { 
  Container, 
  List,
  Header,
  Button,
  Title, 
  Card, 
  ImageContent, 
  DataContent,
  Image,
  ItemName,
  ItemOwner,
  ItemDate,
  Action,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../config/firebase';

const Playlist = () => {
  const { navigate } = useNavigation();
  const [items, setItems] = useState([]);

  const loadData = () => {
    db
    .collection('items')
    .orderBy('name')
    .get().then(item => {
      const allItems = item.docs.map(item => ({
        ...item.data(),
        id: item.id,
      }));

      setItems(allItems);
    });
  };

  const removeItem = async (itemId) => {
    await db.collection('items').doc(itemId).delete();
    
    const updatedItems = items.filter(item => item.id !== itemId);

    setItems(updatedItems);
  };

  const editItem = (id) => {
    navigate('Item', {
      param: {
        id,
      }
    })
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return(
      <Container>
        <Header>
          <Title>Coleção</Title>  
          <Button onPress={() => navigate('Register')}>
            <Feather name="plus" size={20} color="#fff" />
          </Button> 
        </Header> 

        <List
          onRefresh={loadData}
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Card>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ImageContent>
                  <Image source={{ uri: item.uri }} />
                </ImageContent>
                
                <DataContent>
                  <ItemName>{item.name}</ItemName>
                  <ItemOwner>Autor/Criador: {item.owner}</ItemOwner>
                  <ItemDate>Ano: {item.year}</ItemDate> 
                </DataContent>
              </View>

              <View style={{ flexDirection: 'row', alignItem: 'center' }}>
                <Action onPress={() => removeItem(item.id)}>
                  <Feather name="trash" color="red" size={16} />
                </Action>
                <Action onPress={() => editItem(item.id)}>
                  <Feather name="edit" color="#ffc017" size={16} />
                </Action>
              </View>
            </Card>
          )}
        />
      </Container>
  );
};

export default Playlist;