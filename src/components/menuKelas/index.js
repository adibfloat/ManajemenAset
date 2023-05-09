import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const MenuKelas = ({navigation, name, backgroundColor}) => {
    return (
        <TouchableOpacity style={[styles.menu, {backgroundColor}]} onPress={() => {navigation.navigate('DetailRangkapData',{name: name})}}>
            <Text style={styles.textMenu}>{name.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    menu: {
        padding: 30,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20
    },
    textMenu: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default MenuKelas