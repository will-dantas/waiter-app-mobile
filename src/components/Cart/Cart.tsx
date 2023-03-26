import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useCartItens } from '../../hooks/useCartItens';
import { FormatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button/Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { OrderConfirmedModal } from '../OrderConfirmedModal/OrderConfirmedModal';
import { Text } from '../Text';
import {
  Actions,
  Image,
  Item,
  ProducContainer,
  ProductDatails,
  QuantityContainer,
  Summary,
  TotalContainer
} from './Cart.styles';

export const Cart = () => {
  const {cartItens, addToCart, decreaseToCart} = useCartItens();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const total = cartItens.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  const handleConfirmedOrder = () => {
    setIsModalVisible(true);

  };

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onOk={() => setIsModalVisible}
      />
      {cartItens.length > 0 &&
        (
          <FlatList
            data={cartItens}
            keyExtractor={cartItem => cartItem.product._id}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 20, maxHeight: 150 }}
            renderItem={({ item: cartItem }) => (
              <Item>
                <ProducContainer>
                  <Image
                    source={require('../../assets/frango-catupiry.png')}
                  // source={{ uri: `http://localhost:3001/uploads/${cartItem.product.imagePath}`}}
                  />
                  <QuantityContainer>
                    <Text size={14} color="#666">
                      {cartItem.quantity}x
                    </Text>
                  </QuantityContainer>

                  <ProductDatails>
                    <Text size={14} weight='600'>
                      {cartItem.product.name}
                    </Text>
                    <Text size={14} color='#666' style={{ marginTop: 4 }}>
                      {FormatCurrency(cartItem.product.price)}
                    </Text>
                  </ProductDatails>
                </ProducContainer>
                <Actions>
                  <TouchableOpacity
                    style={{ marginRight: 24 }}
                    onPress={() => addToCart(cartItem.product)}
                  >
                    <PlusCircle />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => decreaseToCart(cartItem.product)}>
                    <MinusCircle />
                  </TouchableOpacity>
                </Actions>
              </Item>
            )}
          />
        )
      }
      <Summary>
        <TotalContainer>
          {cartItens.length > 0
            ? (
              <>
                <Text color='#666'>Total</Text>
                <Text size={20} weight="600">{FormatCurrency(total)}</Text>
              </>
            ) :
            (
              <>
                <Text color='#999'>Seu carrinho está vazio</Text>
              </>
            )
          }
        </TotalContainer>

        <Button
          label='Confirmar pedido'
          onPress={() => handleConfirmedOrder()}
          disabled={cartItens.length === 0}
          loading={isLoading}
        />
      </Summary>
    </>
  );
};
