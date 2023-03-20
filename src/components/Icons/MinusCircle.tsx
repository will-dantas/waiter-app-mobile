import Svg, { Path } from 'react-native-svg';

export function MinusCircle() {
  const markup = <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M16 12H8" stroke="#D73035" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z" stroke="#D73035" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>;

  return markup;
}
