import { StyleSheet, View, Button, TextInput } from "react-native";
import { useRouter, Stack } from 'expo-router';
import React, { useState } from 'react';


export default function Page() {

    const router = useRouter();
    const nextPage= () => {
        router.push(`/user/${valor}`);
    }

    const voltar = useRouter();
    const voltarPage = () => {
        voltar.push('/');
    }

    const [valor, setValor] = useState('');
    const handleInputChange = (text: string) => {
        setValor(text);
    } 

    const handleClick = () => {
        console.log('Valor do TextInput:', valor);
      };


  return (
    <View style={styles.container}>
        <Stack.Screen options={{ title: "Procura Usuario" }}/>
        <TextInput style={styles.message} value={valor} 
        keyboardType="numeric" placeholder="Id usuario" onChangeText={handleInputChange}></TextInput>

        <View style={styles.buttons}>
            <Button title="Ir ao usuario" onPress={() => { handleClick(); nextPage(); }} />
            <Button title="Voltar" onPress={voltarPage}/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,                  
      justifyContent: "center", 
      alignItems: "center",     
      width: "100%",            
      height: "100%",           
      padding: 24,              
    },
    message: {
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 1)',
      borderStyle: 'solid',
      padding: 20,
      borderRadius: 20,
      margin: 15
    },
    buttons: {
        flexDirection: 'row',
        gap: 5
    }
  });