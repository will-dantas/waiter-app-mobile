import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { Cart } from '../components/Cart/Cart';
import { Categories } from '../components/Categories/Categories';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { TableModal } from '../components/TableModal/TableModal';
import { products } from '../mocks/products';
import { ICartItem } from '../types/Cart.interface';
import { IProduct } from '../types/Products.interface';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export const Main = () => {
  const [isTablemodalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItens, setCartItens] = useState<ICartItem[]>([]);

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  const handleCancelOrder = () => {
    setSelectedTable('');
  };

  const handleAddToCart = (product: IProduct) => {
    if(!selectedTable) {
      setIsTableModalVisible(true);
    }

    alert(product.name);
  };

  // video 1:56:00

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
          <Menu onAddToCart={handleAddToCart}/>
        </MenuContainer>

      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable &&
            <Button label='Novo Pedido' onPress={() => setIsTableModalVisible(true)} />
          }

          {selectedTable &&
            <Cart cartItens={cartItens} />}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTablemodalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
};
