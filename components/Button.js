import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

export const CircleButton = ({ data, imgUrl, ...props }) => {
    return (
        <TouchableOpacity
            style={styles.circle}
        >
            <Image
                source={imgUrl}
                resizeMode='contain'
                style={{
                    width: 24,
                    height: 24
                }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#fff',
        position: 'absolute',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center',
        top: 15,
        textAlign: 'center'
    }
})