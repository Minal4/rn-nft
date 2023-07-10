import React, { useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native'
import { Header, NFTcards } from '../components'
import { NFTData } from '../constants'
import { View } from 'react-native'

const HomeScreen = () => {
    const [nftData, setNftData] = useState(NFTData)
    const handleSearch = (value) => {
        if (!value.length) return setNftData(NFTData)

        const filteredData = NFTData.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })

        if (filteredData.length) {
            setNftData(filteredData)
        } else {
            setNftData(NFTData)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatarContainer}>
                <FlatList
                    data={nftData}
                    renderItem={({ item }) => <NFTcards data={item} />}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={<Header onSearch={handleSearch} />}
                />
                <Text style={styles.avatarBackground} />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        position: 'relative'
    },
    avatarContainer: {
    },
    avatarBackground: {
        position: 'absolute',
        height: 350,
        zIndex: -1,
        top: 0,
        width: '100%',
        backgroundColor: '#333',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100
    },
})

export default HomeScreen