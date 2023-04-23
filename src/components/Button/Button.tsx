import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { IButton } from './Button.interface';
import { Container } from './Button.styles';

export const Button = ({ label, onPress, disabled, loading }: IButton) => {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="600" color="#fff" >
          {label}
        </Text>
      )}

      {loading && (
        <ActivityIndicator color="#fff"/>
      )}
    </Container>
  );
};
