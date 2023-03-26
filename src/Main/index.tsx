import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Button } from '../components/Button/Button';
import { Cart } from '../components/Cart/Cart';
import { Categories } from '../components/Categories/Categories';
import { Header } from '../components/Header/Header';
import { Empty } from '../components/Icons/Empty';
import { Menu } from '../components/Menu/Menu';
import { TableModal } from '../components/TableModal/TableModal';
import { Text } from '../components/Text';
import { useCartItens } from '../hooks/useCartItens';
import { useModalTable } from '../hooks/useModalTable';
import { products as mockProducts } from '../mocks/products';
import { IProduct } from '../types/Products.interface';
import {
  CategoriesContainer,
  CenteredContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles';

export const Main = () => {
  const { addToCart } = useCartItens();
  const {
    modalTable,
    openModal,
    closeModal,
    selectedTable,
    cancelOrder,
    saveTable
  } = useModalTable();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(mockProducts);

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={cancelOrder}
        />


        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#D73035" size="large"/>
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            {products.length > 0 ? (
              <MenuContainer>
                <Menu
                  onAddToCart={addToCart}
                  products={products}
                />
              </MenuContainer>
            ) :
              <CenteredContainer>
                <Empty />
                <Text color="#666" style={{ marginTop: 24 }}>Nenhum produto foi encontrado!</Text>
              </CenteredContainer>
            }
          </>
        )}

      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable &&
            <Button label='Novo Pedido' onPress={() => openModal()} disabled={isLoading}/>
          }

          {selectedTable && <Cart />}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={modalTable}
        onClose={() => closeModal()}
        onSave={saveTable}
      />
    </>
  );
};
