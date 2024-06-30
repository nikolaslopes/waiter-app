import styled from "styled-components/native";

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 18px;
`;
export const ModalBody = styled.View`
  background: #FAFAFA;
  flex: 1;
  padding: 32px 24px 0;
`;

export const Header = styled.View`
`;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
`;
