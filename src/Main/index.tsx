import { Button } from '../components/Button/Button';
import { Categories } from '../components/Categories/Categories';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export const Main = () => {
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
          <Button label='Novo Pedido' onPress={() => alert('Feito!')} />
        </FooterContainer>
      </Footer>
    </>
  );
};
