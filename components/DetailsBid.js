import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'

const DetailsBid = ({ bid }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingBottom: 20, alignItems: 'center', borderBottomWidth: 1, borderColor: '#e6e6e6' }}>
            <Image
                style={{ width: 50, height: 50, marginRight: 30 }}
                source={bid.image}
                resizeMode='contain' />
            <View style={{ flex: 1 }}>
                <Text style={styles.textCenter}>Bid Placed By {bid.name}</Text>
                <Text style={styles.textCenter}>{bid.date}</Text>
            </View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textCenter: {
        textAlign: 'left'
    }
})

export default DetailsBid