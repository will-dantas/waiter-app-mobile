import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { IHeader } from "./Header.interface";
import { Container, ContentHeader, OrderHeader } from "./Header.styles";

export const Header = ({ selectedTable }: IHeader) => {
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
                            <TouchableOpacity>
                                <Text color="#D73035" weight="600" size={14}>
                                    Cancelar pedido
                                </Text>
                            </TouchableOpacity>
                        </OrderHeader>
                    </ContentHeader>
                </>
            )}
        </Container>
    );
};
