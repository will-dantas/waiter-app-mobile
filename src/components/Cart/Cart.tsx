import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useCartItems } from '../../hooks/useCartItems';
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
  TotalContainer,
} from './Cart.styles';
import { useModalTable } from '../../hooks/useModalTable';
import { IOrderPayload } from '../../types/OrderPayload';
import { CreateOrderService } from '../../services/CreateOrderService/CreateOrderService';
import { AxiosError } from 'axios';

export const Cart = () => {
  const { cartItems, addToCart, decreaseToCart } = useCartItems();
  const { selectedTable } = useModalTable();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  const handleConfirmedOrder = async () => {
    const productOrders = cartItems.map((cartItem) => ({
      product: cartItem.product._id,
      quantity: cartItem.quantity,
    }));

    const orderPayload: IOrderPayload = {
      table: selectedTable,
      products: productOrders
    };

    setIsLoading(true);

    new CreateOrderService().execute(orderPayload).then(() => {
      setIsModalVisible(false);
      setIsModalVisible(true);
    }).catch((error: AxiosError) => {
      if (error.response?.status === 500) {
        alert('Erro no servidor, tente mais tarde!');
      }

      setIsLoading(false);
    });
  };

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onOk={() => setIsModalVisible}
      />
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProducContainer>
                <Image
                  source={{ uri: `http://localhost:3001/uploads/${cartItem.product.imagePath}` }}
                />
                <QuantityContainer>
                  <Text size={14} color="#666">
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDatails>
                  <Text size={14} weight="600">
                    {cartItem.product.name}
                  </Text>
                  <Text size={14} color="#666" style={{ marginTop: 4 }}>
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

                <TouchableOpacity
                  onPress={() => decreaseToCart(cartItem.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}
      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">
                {FormatCurrency(total)}
              </Text>
            </>
          ) : (
            <>
              <Text color="#999">Seu carrinho está vazio</Text>
            </>
          )}
        </TotalContainer>

        <Button
          label="Confirmar pedido"
          onPress={() => handleConfirmedOrder()}
          disabled={cartItems.length === 0}
          loading={isLoading}
        />
      </Summary>
    </>
  );
};
