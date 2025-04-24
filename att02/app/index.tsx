import React from "react";
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import CustomButton from "../components/CustomButton";

export default function Page() {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{ title: "Pagina inicial" }}/>
        <p style={styles.message}>Page 1</p>
      <CustomButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Faz o container ocupar toda a tela
    justifyContent: "center", // Alinha o conteúdo verticalmente no centro
    alignItems: "center",     // Alinha o conteúdo horizontalmente no centro
    width: "100%",            // Garante que o container ocupe toda a largura
    height: "100%",           // Garante que o container ocupe toda a altura
    padding: 24,              // Adiciona um espaçamento de 24px ao redor
  },
  message: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    borderStyle: 'solid',
    padding: 40,
    borderRadius: 20,
  }
});
