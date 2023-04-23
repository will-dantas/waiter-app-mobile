import { Platform } from 'react-native';
import styled from 'styled-components/native';

interface CategoriesMenuProps {
  selectedCategory: boolean
}

const isAndroid = Platform.OS === 'android' || Platform.OS === 'web';

export const ContainerCategory =  styled.View`
  padding-left: 24px;
  padding-right: 24px;
`;

export const Category = styled.TouchableOpacity<CategoriesMenuProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  width: auto;
  margin-bottom: 3px;
  height: 44px;
  border-radius: 8px;
  padding: 8px;
  background: ${(props) => props.selectedCategory ? '#d73035' : '#fff'};
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;

export const Icon = styled.View`
  background: #fff;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 22px;
  margin-right: 8px;
`;
