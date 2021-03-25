import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { palette } from '../../../themes/default'

interface InputProps {
  placeholder: string
  isPassword?: boolean
}

export const Input = ({ placeholder, isPassword }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={palette.greyLight}
      secureTextEntry={isPassword ? true : false}
      autoCapitalize="none" />
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: palette.greyLight,
    color: palette.greyDark,
    height: 31,
    width: 288,
    paddingVertical: 0,
    paddingHorizontal: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginTop: 48
  }
})
