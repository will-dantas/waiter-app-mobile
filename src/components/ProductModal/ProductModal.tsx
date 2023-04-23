/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FlatList, Modal } from 'react-native';
import { FormatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button/Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { IProductModal } from './ProductModal.interface';
import {
  BodyModal,
  CloseButton,
  Footer,
  FooterContainer,
  HearderModal,
  ImageModal,
  Ingredient,
  IngredientsContainer,
  PriceContainer
} from './ProductModal.styles';

export const ProductModal = ({ visible, onClose, product, onAddToCart }: IProductModal) => {
  if (!product) {
    return null;
  }

  const handleAddtoCart = () => {
    onAddToCart(product!);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <ImageModal
        source={{ uri: `http://localhost:3001/uploads/${product.imagePath}`}}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </ImageModal>

      <BodyModal>
        <HearderModal>
          <Text weight='600' size={24}>{product.name}</Text>
          <Text color='#666' style={{ marginTop: 8 }}>{product.description}</Text>
        </HearderModal>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color='#666'>Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color='#666' style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </BodyModal>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight='600'>{FormatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button label='Adcionar ao pedido' onPress={handleAddtoCart} />
        </FooterContainer>
      </Footer>
    </Modal>
  );
};
