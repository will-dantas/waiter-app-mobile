import { TouchableOpacity } from "react-native";
import { useCartItems } from "../../hooks/useCartItems";
import { Text } from "../Text";
import { IHeader } from "./Header.interface";
import {
  Container,
  ContentHeader,
  OrderHeader,
  TableHeader,
} from "./Header.styles";

export const Header = ({ selectedTable, onCancelOrder }: IHeader) => {
  const { clearOrder } = useCartItems();

  const cancelAndClearOrder = () => {
    onCancelOrder();
    clearOrder();
  };

  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem Vindo(a) ao
          </Text>
          <Text size={24} weight="700">
            WAITER<Text size={24}>APP</Text>
          </Text>
        </>
      )}
      {selectedTable && (
        <>
          <ContentHeader>
            <OrderHeader>
              <Text size={24} weight="600">
                Pedidos
              </Text>
              <TouchableOpacity onPress={() => cancelAndClearOrder()}>
                <Text color="#D73035" weight="600" size={14}>
                  Cancelar pedido
                </Text>
              </TouchableOpacity>
            </OrderHeader>
          </ContentHeader>

          <TableHeader>
            <Text color="#666">Mesa {selectedTable}</Text>
          </TableHeader>
        </>
      )}
    </Container>
  );
};
