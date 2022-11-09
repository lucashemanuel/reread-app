import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #9d61f0;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 30;
`;

export const QuizArea = styled.View`
  padding: 2%;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  background-color: #ffffff;
  width: 90%;
  border-radius: 25;
`;

export const Questions = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  width: 80%;
  height: 18%;
  border-radius: 25;
  margin-bottom: 5%;
`;

export const QuestionText = styled.Text`
  text-align: justify;
  font-family: "Poppins";
  font-size: 17;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-evenly;
  height: 7%;
  width: 60%;
  margin-right: 7%;
`;

export const Next = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: #04aa6d;
`;

export const Previous = styled.TouchableOpacity`
  width: 40%;
  justify-content: center;
  align-items: center;
  background-color: #bbbbbb;
`;

export const ButtonText = styled.Text`
  font-family: "Poppins-Bold";
  color: #ffffff;
`;

export const Imagem = styled.Image`
  width: 100%;
  height: 40%;
`;