import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { assets } from '../constants'


const People = ({ data }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                [assets.person01, assets.person02, assets.person03, assets.person04].map((item, index) => {
                    return (<ImgCmp key={index} item={item} index={index} />)
                })
            }
        </View>
    )
}

export const Title = ({ data }) => {
    return (
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 700 }}>{data.name}</Text>
    )
}

export const Price = ({ data }) => {
    return (
        <Text style={{ fontSize: 16, marginTop: 10 }}>{data.price}</Text>
    )
}

export const NavBtn = ({ data }) => {
    return (
        <Text style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 45, color: '#fff', backgroundColor: '#666', paddingVertical: 5 }}>Place a Bid</Text>
    )
}


const ImgCmp = ({ item, index }) => {
    return (
        <Image style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            marginRight: -5,
        }}
            source={item}
        />
    )
}

const EndDate = () => {
    return (
        <Text>EndDate</Text>
    )
}

export const SubInfo = ({ data }) => {
    return (
        <View style={styles.infoContainer}>
            <People data={data} />
            <EndDate />
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})