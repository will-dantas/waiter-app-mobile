import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Button } from '../components/Button/Button';
import { Cart } from '../components/Cart/Cart';
import { Categories } from '../components/Categories/Categories';
import { Header } from '../components/Header/Header';
import { Empty } from '../components/Icons/Empty';
import { Menu } from '../components/Menu/Menu';
import { TableModal } from '../components/TableModal/TableModal';
import { Text } from '../components/Text';
import { useCartItems } from '../hooks/useCartItems';
import { useModalTable } from '../hooks/useModalTable';
import { ICategory } from '../types/Category';
import { IProduct } from '../types/Products.interface';
import {
  CategoriesContainer,
  CenteredContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from './styles';

export const Main = () => {
  const { addToCart } = useCartItems();
  const {
    modalTable,
    openModal,
    closeModal,
    selectedTable,
    cancelOrder,
    saveTable,
  } = useModalTable();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const a = async () => await axios.get('http://localhost:3001/categories').then((response) => {
    setCategories(response.data);
  });
  useEffect(() => {
    a();
  }, []);

  console.log(categories);

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} onCancelOrder={cancelOrder} />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#D73035" size="large" />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories categories={categories} />
            </CategoriesContainer>

            {products.length > 0 ? (
              <MenuContainer>
                <Menu onAddToCart={addToCart} products={products} />
              </MenuContainer>
            ) : (
              <CenteredContainer>
                {/* <Empty /> */}
                <Text color="#666" style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>
            )}
          </>
        )}
      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              label="Novo Pedido"
              onPress={() => openModal()}
              disabled={isLoading}
            />
          )}

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
