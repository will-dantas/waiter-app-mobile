import { Text } from '../Text';
import { IButton } from './Button.interface';
import { Container } from './Button.styles';

export const Button = ({ label, onPress, disabled }: IButton) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff" >
        {label}
      </Text>
    </Container>
  );
};
