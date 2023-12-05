import { StyleSheet, Text,Modal,View,Button } from "react-native";

const ModalDelete = ({visible,productName,deleteProduct,estateModal}) => {

    return (
        <>
            <Modal visible={visible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText} >Esta usted seguro que desea borrar el producto?</Text>
                        <Text style={styles.modalText} >{productName.title}</Text>
                        <Button title='Borrar' onPress={deleteProduct} />
                        <Button title='Cerrar' onPress={() => estateModal(false)}/>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({

})


export default ModalDelete;