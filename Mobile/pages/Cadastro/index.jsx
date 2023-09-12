import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { TemaContext } from '../../Common/Tema';
import CheckBox from 'expo-checkbox';


export default function Cadastro({navigation}) {
    const [nome, setNome] = useState("")
    const { tema, setTema, corLetra, setCorLetra } = useContext(TemaContext);
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}> 
            <TouchableOpacity>
                <View>
                    <Image source={{uri:'./../../assets/google.png'}} style={{width:10, height:10}} />
                </View>
            </TouchableOpacity>
            <View style={styles.botoens}>
            <TouchableOpacity style={styles.button_deCima} onPress={()=> {navigation.navigate("google")}} activeOpacity={0.7}>
            <Text style={styles.textButtonFacebook}>facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_deCima2} onPress={() =>{navigation.navigate("facebook")}} activeOpacity={0.7}> 
            <Text style={styles.textButtonGoogle}>Google</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.linha} >
                <Text style={styles.texto}>
                    Já tenho </Text><TouchableOpacity ><Text style={styles.textoLink}>conta</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.linhaDesenhada}></View><Text style={styles.texto}>Ou</Text><View style={styles.linhaDesenhada}></View>
            </View>
            <View style={styles.container2}>
            <View>
                <Text style={styles.texto}>Email:</Text>
                <TextInput style={styles.input} />
                <Text style={styles.texto}>Ra:</Text>
                <TextInput style={styles.input} />
                <Text style={styles.texto}>Senha:</Text>
                <TextInput style={styles.input} />
                <Text style={styles.texto}>Data de Nascimento:</Text>
                <TextInput style={styles.input} />
                <Text style={styles.texto}>Telefone:</Text>
                <TextInput style={styles.input} />
                <Text style={styles.texto}>Sala:</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.container3}> 
            <View>
            <CheckBox
                 value={isSelected}
                 onValueChange={setSelection}
                 style={styles.checkbox}
                />
                <Text style={styles.texto2}>
                        Eu li e concordo com os termos de serviço e com a politica da bibliotech
                </Text>
            </View>
            <View style={styles.container4}> 
            <View>
            <TouchableOpacity style={styles.button_entrar} onPress={()=> {navigation.navigate("Cadastro")}} activeOpacity={0.7}  >
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
            </View>
            </View>
            </View>
            </View>
        </View>



    )
}
const alturaTela = Dimensions.get("screen").height;
const larguraTela = Dimensions.get("screen").width;
const styles = StyleSheet.create(

    {

        container: {
            backgroundColor: "#000000",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: 20,
        },
        container2: {
            backgroundColor: "#000000",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: 30,
        },
        container3: {
            backgroundColor: "#000000",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: 50,
        },
        container4: {
            backgroundColor: "#000000",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: 48,
        },

        botoens: {
       flexDirection: "row",
       marginBottom: 10
     
        },
        texto: {
            color: 'white',
        },
        texto2: {
            color: "#36A9A9",
            marginLeft: 20
        },
        linha: {
            flexDirection: "row",
        },
        textoLink: {
            color: 'blue'
        },
        input: {
            borderWidth: 2,
            borderColor: "#36A9A9" ,
            width: larguraTela / 1.5,
            height: alturaTela * 0.055
        },
        button_deCima: {
            borderRadius: 100,
            borderWidth: 1, 
            borderColor: "blue",
            margin: 3
        },
        button_deCima2: {
            borderRadius: 100,
            borderWidth: 1, 
            borderColor: "red",
            margin: 3
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
          checkbox: {
           width: 20,
           marginBottom: -20
          },
          textButton: {
            fontSize: alturaTela/40,
            padding: 5,
            color: "#36A9A9",
          },
          textButtonFacebook: {
            fontSize: alturaTela/40,
            padding: 5,
            color: "blue",
          },
          textButtonGoogle: {
            fontSize: alturaTela/40,
            padding: 5,
            color: "red",
          },
        linhaDesenhada: {
            borderBottomWidth: 1,
            borderColor: "#36A9A9",
            width: larguraTela * 0.4,
              }
              
    }

)