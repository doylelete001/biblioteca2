import { TemaContext } from "../../Common/Tema";
import { useContext } from "react";

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Logo from "../../assets/pilha-de-tres-livros1.png"


export default function Home({ navigation }) {
  const { tema, setTema, corLetra, setCorLetra } = useContext(TemaContext);

  



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Onde você pode ser você mesmo</Text>
      </View>
      <View style={styles.circle_group}>
        <View style={styles.circle}>
          <Image
            style={[styles.image, {}]}
            source={Logo}
          />
        </View>
        <View style={styles.circle}>
          <Image
            style={[
              styles.image,
              {
                width: Dimensions.get("window").width * 0.24,
              },
            ]}
            source={require("../../assets/campanha-digital1.png")}
          />
        </View>
      </View>
      <View style={styles.foot}>
        <View>
          <Text>
            
            Faça seu login aqui
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button_entrar} onPress={()=> {navigation.navigate("Cadastro")}} activeOpacity={0.7}  >
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const alturaTela=Dimensions.get("screen").height;
const larguraTela=Dimensions.get("screen").width;
const styles = StyleSheet.create(
  
  {
  
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  circle_group: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    height: 312,
    gap: 23,
  },
  circle: {
    backgroundColor: "#36A9A9",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width:larguraTela * 0.32,
    height: larguraTela * 0.32,
    alignItems: "center",
    justifyContent: "center",
  },
  button_entrar: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#36A9A9",
    padding: 1,
    borderWidth: 1, 
    width:larguraTela * 0.34,
    height: alturaTela * 0.07,
    borderRadius: 100,
  },
  foot: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: Dimensions.get("window").width * 0.28,
    height: Dimensions.get("window").height * 0.14,
  },
  text: {
    fontSize: alturaTela/35,
    color: "#36A9A9",
  },
  textButton: {
    fontSize: alturaTela/40,
    padding: 5,
    color: "#36A9A9",
  },
  textEntrar: {
  },
});