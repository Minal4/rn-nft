import { FlatList } from 'react-native';
import DetailHeader from '../components/DetailHeader';
import DetailsBid from '../components/DetailsBid';

const Details = ({ route, navigation }) => {
    const { data } = route.params;
    return (
        <>
            <FlatList
                data={data.bids}
                ListHeaderComponent={<DetailHeader data={data} navigation={navigation} />}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
            />
        </>
    )
}



export default Details