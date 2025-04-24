import { useGlobalSearchParams, Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Page() {

  const {id} = useGlobalSearchParams();

    return (
    <View style={styles.container}>
    <Stack.Screen options={{ title: `user ${id}` }}/>  
      LUiZAO
    </View>
    )
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
      padding: 40,
      borderRadius: 20,
    }
  });