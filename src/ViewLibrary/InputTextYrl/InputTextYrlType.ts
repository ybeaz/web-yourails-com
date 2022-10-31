import { TextInput } from 'react-native'

/**
 * IInputYrlProps Interface
 */
export interface IInputTextYrlProps {
  onChangeText: (text: string) => void
  value: string | undefined
  styleProps?: { container: any; inputText: any } | undefined
}
