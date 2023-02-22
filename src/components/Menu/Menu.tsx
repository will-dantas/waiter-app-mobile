import { FlatList } from 'react-native';
import { products } from '../../mocks/products';
import { Text } from '../Text';

export const Menu = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={products => products._id}
      renderItem={({ item: product }) => (
        <Product>
          <Image />

          <ProductDatails>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </ProductDatails>
        </Product>
      )}
    />
  );
};
