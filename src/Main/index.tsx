import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { Cart } from '../components/Cart/Cart';
import { Categories } from '../components/Categories/Categories';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { TableModal } from '../components/TableModal/TableModal';
import { products } from '../mocks/products';
import { ICartItem } from '../types/Cart.interface';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export const Main = () => {
  const [isTablemodalVisible, setIsTablemodalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItens, setCartItens] = useState<ICartItem[]>([
    {
      product: products[0],
      quantity: 1
    },
    {
      product: products[1],
      quantity: 2
    }
  ]);

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  const handleCancelOrder = () => {
    setSelectedTable('');
  };

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable &&
            <Button label='Novo Pedido' onPress={() => setIsTablemodalVisible(true)} />
          }

          {selectedTable &&
            <Cart cartItens={cartItens}/>}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTablemodalVisible}
        onClose={() => setIsTablemodalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
};
