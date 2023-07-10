import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES, assets } from '../constants'
import { CircleButton } from './Button'
import { NavBtn, Price, SubInfo, Title } from './subInfo'
import { useNavigation } from '@react-navigation/native'


const NFTcards = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View style={{ marginBottom: 20, marginHorizontal: 15 }} >
            <Image
                source={data.image}
                resizeMode='cover'
                style={styles.avatar}
            />
            <CircleButton data={data} imgUrl={assets.heart} />
            <View style={styles.avatarTitle}>
                <View>
                    <SubInfo data={data} />
                </View>
                <View>
                    <Title data={data} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Price data={data} />
                    <TouchableOpacity onPress={() => navigation.navigate("Details", { data })}>
                        <NavBtn />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    avatar: {
        width: '100%',
        height: 250,
        borderRadius: 8,
    },

    avatarTitle: {
        fontSize: 24,
        padding: 10,
        backgroundColor: "#fff",
        textAlign: 'center',
        fontWeight: 700
    }
})

export default NFTcards