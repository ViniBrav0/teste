import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View>
      <Text>HOME</Text>
      <Button>mode='contained'
      onPress={()} => {
        NavigationPreloadManager.openDrawer()
        setTimeout(() => {
            navigation.closerDrawer()
        } ,3000)
      </Button>
    
     
    </View>
  )
}

const styles = StyleSheet.create({})