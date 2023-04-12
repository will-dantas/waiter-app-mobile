import { useState } from 'react';
import { FlatList } from 'react-native';
import { IProduct } from '../../types/Products.interface';
import { FormatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal/ProductModal';
import { Text } from '../Text';
import { IMenu } from './Menu.interface';
import { AddToCartButton, Image, ProductContainer, ProductDatails, Separator } from './Menu.styles';

export const Menu = ({ onAddToCart, products }: IMenu) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const handleOpenModal = (product: IProduct) => {
    setIsModalVisible(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        keyExtractor={products => products._id}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <Image
             source={{ uri: `http://localhost:3001/uploads/${product.imagePath}`}}
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

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
};
