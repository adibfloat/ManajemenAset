import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const DataKosong = () => {
  return (
    <View style={{height: Dimensions.get('screen').height - 200, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text>DataKosong</Text>
    </View>
  )
}

export default DataKosong