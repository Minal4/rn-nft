import { View, Text } from 'react-native'
import React, { useState } from 'react'

const DetailDesc = ({ data }) => {
    const [showDesc, setShowDesc] = useState(false)

    return (
        <Text style={{ fontSize: 20 }}>
            {showDesc ?
                data.description : data.description.slice(0, 200)}

            <Text onPress={() => setShowDesc(!showDesc)}>{showDesc ? 'Show Less' : "Show More ..."}</Text>
        </Text>
    )
}

export default DetailDesc