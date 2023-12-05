import { View,Text,Button,StyleSheet } from "react-native"

const CardProduct = ({visualModal, item} ) => {

    return(
        <>
            <View style={styles.cardProduct}>
                <Text style={styles.texto} >{item.title}</Text>
                <Text style={styles.texto} >{item.price} $ </Text>
                <Button  title='DEL' onPress={() => visualModal(item)} />
            </View>
        
        
        </>
    )
}

const styles = StyleSheet.create({
    cardProduct:{
        backgroundColor:'black',
        flexDirection: 'row',
        padding:15,
        margin:10,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: 5,
    
      },
      texto:{
        color:'grey',
      }
})

export default CardProduct