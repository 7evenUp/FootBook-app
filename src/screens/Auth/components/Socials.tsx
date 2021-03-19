import React from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Box, Text } from '../../../themes/default'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Socials = () => {
  return (
    <Box style={styles.socials} mt="l">
      <Text variant="Poppins400Size14ColorGreyDark">Check our socials</Text>
      <Box flexDirection="row" alignItems="center" mt="s">
        <TouchableOpacity onPress={() => {
        }}>
          <Box backgroundColor="greyDark" style={styles.socialsItem} mr="l">
            <Ionicons name="logo-vk" size={26} color="white" />
          </Box>
        </TouchableOpacity>
        
        <Box backgroundColor="greyDark" style={styles.socialsItem} mr="l">
          <Ionicons name="logo-instagram" size={26} color="white" />
        </Box>
        <Box backgroundColor="greyDark" style={styles.socialsItem}>
          <Ionicons name="logo-twitter" size={26} color="white" />
        </Box>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  socials: {
    flex: 15,
    alignItems: 'center',
  },
  socialsItem: {
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
