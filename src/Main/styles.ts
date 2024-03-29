import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #fafafa;
  flex: 1;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 20px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  padding: 16px 24px;
  background: #fff;
`;

export const FooterContainer = styled.SafeAreaView``;

export const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
