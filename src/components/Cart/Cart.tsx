import { FlatList, TouchableOpacity } from 'react-native';
import { FormatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button/Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { ICart } from './Cart.interface';
import { Actions, Image, Item, ProducContainer, ProductDatails, QuantityContainer, Summary, TotalContainer } from './Cart.styles';

export const Cart = ({ cartItens }: ICart) => {
  return (
    <>
      <FlatList
        data={cartItens}
        keyExtractor={cartItem => cartItem.product._id}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 20, maxHeight: 150}}
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
              <TouchableOpacity style={{ marginRight: 24 }}>
                <PlusCircle />
              </TouchableOpacity>

              <TouchableOpacity>
                <MinusCircle />
              </TouchableOpacity>
            </Actions>
          </Item>
        )}
      />

      <Summary>
        <TotalContainer>
          <Text color='#666'>Total</Text>
          <Text size={20} weight="600">{FormatCurrency(120)}</Text>
        </TotalContainer>

        <Button label='Confirmar pedido' onPress={() => alert('Pedido confirmado')}/>
      </Summary>
    </>
  );
};
