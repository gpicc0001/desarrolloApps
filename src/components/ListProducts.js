import { FlatList,StyleSheet,View,Text,Button } from "react-native"
import CardProduct from "./CardProduct";

const ListProducts = ({info, visualModal}) => {


    return (
        <>
            <FlatList 
            data={info}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CardProduct item={item} visualModal={visualModal} />}
            />
        </>
    )
}

const styles = StyleSheet.create ({
    

})

export default ListProducts;