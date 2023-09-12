import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
export default function Navbar() {

  return (
    <View style={styles.navbar}>
      
        <Text style={styles.text}>LibraryClass</Text>
     
      
        <Image
          style={styles.logo}
          source={require("./../../assets/logo2.png")}
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: "8%",
    backgroundColor: "#000000",
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center'
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius:50
  },
  text: {
    fontSize: 30,
    color: "#36A9A9",
    fontFamily: "JustAnotherHand_400Regular",
    textAlign:'center'
  },
});
