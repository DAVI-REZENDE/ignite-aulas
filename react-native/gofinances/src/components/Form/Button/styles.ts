import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
  padding: 18px;

  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.medium};
`;