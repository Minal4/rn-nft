import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { assets } from '../constants'

const Header = ({ onSearch }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Image
                    source={assets.logo}
                    style={{ resizeMode: 'contain', width: 85 }}
                />
                <View>
                    <TouchableOpacity>
                        <Image
                            source={assets.person01}
                            style={{ resizeMode: 'contain', height: 50, width: 50 }}
                        />
                        <Image
                            source={assets.badge}
                            style={{ resizeMode: 'contain', width: 20, position: 'absolute', bottom: 10, right: 0 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <Text style={{ color: 'grey', fontSize: 21 }}>
                    Hello Victoria
                </Text>
                <Text style={{ color: '#fff', fontSize: 27 }}>
                    Let's find a masterpiece
                </Text>

                <TextInput
                    placeholder='Search NFT Cards'
                    style={{ backgroundColor: '#fff', paddingHorizontal: 5, borderRadius: 6, width: '100%', height: 35, marginTop: 20 }} onChangeText={onSearch} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#333',
    }
})

export default Header