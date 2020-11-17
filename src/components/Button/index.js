import React from 'react';

import { Container, Text } from './styles';

function Button({ children, onPress }) {
  return (
    <Container onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
}

export default Button;