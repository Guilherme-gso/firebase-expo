import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/stack.routes';
import { 
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if(!fontsLoaded) return <View />;

  return (
   <NavigationContainer>
     <StatusBar barStyle="light-content"  backgroundColor={theme.colors.primary} />
     <Routes />
   </NavigationContainer>
  );
}


