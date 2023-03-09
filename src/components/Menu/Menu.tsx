import { FlatList } from 'react-native';
import { products } from '../../mocks/products';
import { FormatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { AddToCartButton, Image, Product, ProductDatails, Separator } from './Menu.styles';

export const Menu = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={products => products._id}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
          <Image
            source={require('../../assets/frango-catupiry.png')}
          />
          
          <ProductDatails>
            <Text weight='600'>{product.name}</Text>
            <Text
              size={14}
              color="#666"
              style={{ paddingVertical: 8 }}
            >
              {product.description}
            </Text>
            <Text size={14} weight='600'>{
              FormatCurrency(product.price)}
            </Text>
          </ProductDatails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
};
