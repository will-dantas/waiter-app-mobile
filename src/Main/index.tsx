import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { Categories } from '../components/Categories/Categories';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { TableModal } from '../components/TableModal/TableModal';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export const Main = () => {
  const [isTablemodalVisible, setIsTablemodalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  return (
    <>
      <Container>
        <Header />

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
