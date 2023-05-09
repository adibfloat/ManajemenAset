import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { MenuKelas } from "../../components";

const RangkapData = ({ navigation }) => {
    const [data, setData] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.tombol}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.textTombol}>Kembali</Text>
                </TouchableOpacity>
                <View style={styles.garis} />
            </View>

            <ScrollView style={styles.scroll}>

                <MenuKelas navigation={navigation} name="kelas 10 ipa" backgroundColor={'blue'}/>
                <MenuKelas navigation={navigation} name="kelas 10 ips" backgroundColor={'blue'}/>
                <MenuKelas navigation={navigation} name="kelas 10 agama" backgroundColor={'blue'}/>

                <MenuKelas navigation={navigation} name="kelas 11 ipa" backgroundColor={'green'}/>
                <MenuKelas navigation={navigation} name="kelas 11 ips" backgroundColor={'green'}/>
                <MenuKelas navigation={navigation} name="kelas 11 agama" backgroundColor={'green'}/>

                <MenuKelas navigation={navigation} name="kelas 12 ipa" backgroundColor={'red'}/>
                <MenuKelas navigation={navigation} name="kelas 12 ips" backgroundColor={'red'}/>
                <MenuKelas navigation={navigation} name="kelas 12 agama" backgroundColor={'red'}/>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tombol: {
        backgroundColor: '#075eec',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        width: 100,
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    garis: {
        borderWidth: 2,
        marginTop: 10,
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    scroll: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
})

export default RangkapData