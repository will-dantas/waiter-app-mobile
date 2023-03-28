import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";
import { useCartItems } from "../../hooks/useCartItems";
import { useModalTable } from "../../hooks/useModalTable";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { IOrderConfirmedModal } from "./OrderConfirmedModal.interface";
import { Container, OkButton } from "./OrderConfirmedModal.styles";

export const OrderConfirmedModal = ({
  visible,
  onOk,
}: IOrderConfirmedModal) => {
  const { clearOrder } = useCartItems();
  const { cancelOrder } = useModalTable();

  const handleOrderConfirmed = () => {
    onOk;
    clearOrder();
    cancelOrder();
  };

  return (
    <Modal visible={visible} animationType="fade">
      <StatusBar style="light" />
      <Container>
        <CheckCircle />
        <Text
          size={20}
          weight="600"
          color="#fff"
          style={{ marginTop: 12, marginBottom: 4 }}
        >
          Pedido confirmado
        </Text>
        <Text color="#fff" opacity={0.9}>
          O seu pedido já entrou na fila de produção!
        </Text>
        <OkButton onPress={() => handleOrderConfirmed()}>
          <Text color="#d73035" weight="600">
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
};
