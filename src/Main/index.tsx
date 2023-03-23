import { Button } from '../components/Button/Button';
import { Cart } from '../components/Cart/Cart';
import { Categories } from '../components/Categories/Categories';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { TableModal } from '../components/TableModal/TableModal';
import { useCartItens } from '../hooks/useCartItens';
import { useModalTable } from '../hooks/useModalTable';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

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

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={cancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu onAddToCart={addToCart} />
        </MenuContainer>

      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable &&
            <Button label='Novo Pedido' onPress={() => openModal()} />
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
