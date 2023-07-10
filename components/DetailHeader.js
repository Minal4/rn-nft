import { View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import DetailDesc from './DetailDesc';

const DetailHeader = ({ data, navigation }) => {
    return (
        <SafeAreaView style={styles.detailContainer}>
            <TouchableOpacity onPress={() => navigation.push('Home')} style={{ position: 'absolute', left: 15, zIndex: 2, top: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                    name='chevron-left'
                    data
                    size={30}
                >Details</Icon>
            </TouchableOpacity>
            <View>
                <Image
                    style={{ height: 250, width: '100%', marginBottom: 20 }}
                    resizeMode='cover'
                    source={data.image} />
                <DetailDesc data={data} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15
    }

})

export default DetailHeader