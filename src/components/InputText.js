import { View,TextInput,Button,StyleSheet } from "react-native"

const InputText = ({stateTitle, statePrice, valueTitle, valuePrice, addProduct}) => {
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Producto' style={styles.input} onChangeText={(t) => stateTitle(t)} value={valueTitle} />
                <TextInput placeholder='Precio' style={styles.input} onChangeText={(t) => statePrice(t)} value={valuePrice} />
                <Button  title='ADD' onPress=  {addProduct} /> 
            </View>
        </>
    )
}

const styles = StyleSheet.create ({
    inputContainer:{
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingTop: 60,
        paddingBottom:50,
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      input:{
        color: 'blue',
        borderWidth: 2,
        paddingHorizontal: 10,
        width: 150,
        backgroundColor: 'grey',
        borderRadius:7,
      },
})

export default InputText