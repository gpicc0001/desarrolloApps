import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDelete from './src/components/ModalDelete';
import ListProducts from './src/components/ListProducts';
import InputText from './src/components/InputText';



export default function App() {

  const [newTitleProduct, setNewTitleProduct] = useState('')
  const [newPriceProduct, setNewPriceProduct] = useState('')
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [productSelected, setProductSelected] = useState([])

  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title:newTitleProduct,
      price:newPriceProduct}
      
      setProducts(current => [...current,newProduct])
      setNewTitleProduct('');
      setNewPriceProduct('')
      console.log(products);
      console.log(`se agrego: ${newTitleProduct} con el precio: $${newPriceProduct}`);
  }

  const handlerModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
  }
  const handlerDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
    console.log(`se elimino el producto: ${productSelected.title}`);
  }

  return (
    <View style={styles.container}>
      <InputText stateTitle ={setNewTitleProduct} statePrice={setNewPriceProduct} valueTitle={newTitleProduct} valuePrice={newPriceProduct} addProduct ={handlerAddProduct} />
      <View style={styles.listContainer}>
        <ListProducts info = {products} visualModal = {handlerModal}/>
        <ModalDelete visible = {modalVisible} productName = {productSelected} deleteProduct = {handlerDeleteProduct} estateModal = {setModalVisible}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa toda la pantalla
    backgroundColor: '#03045e',
    alignItems: 'center',
    justifyContent: 'start',
  },
  listContainer:{
    width:'100%',
    borderRadius: 5,
  },
  
});
