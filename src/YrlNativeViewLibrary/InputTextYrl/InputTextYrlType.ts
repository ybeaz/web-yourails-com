import { TextInput, ViewProps, TextInputProps } from 'react-native'

/**
 * IInputYrlProps Interface
 * @prop autofocus The Input's autofocus and optional.
 * @prop defaultValue The Input's default value and optional.
 * @prop maxlength The Input's maxlength and optional.
 * @prop multiline The Input's multiline and optional.
 * @prop onChangeText The Input's onChange function and mandatory.
 * @prop placeholder The Input's placeholder and optional.
 * @prop referance The Input's referance is a ref and optional.
 * @prop styleProps The Input's styleProps and optional.
 * @prop value The Input's value and optional.
 */
export interface InputTextYrlPropsType {
  autofocus?: boolean
  defaultValue?: string
  maxlength?: number
  multiline?: boolean
  numberOfLines?: number
  onLayout?: (event: any) => void
  onChangeText: (text: string) => void
  onSubmitEditing: () => void
  onHeightChange?: (height: number) => void
  placeholder?: string
  placeholderTextColor?: string
  reference?: any
  styleProps?: {
    InputTextYrl: Object
    inputText: Object
    inputTextResize: Object
  }
  testID: string
  value?: string
  markdown?: boolean
  maxHeight?: number
}

export type InputTextPropsOutType = {
  inputTextYrlProps: ViewProps
  textInputProps: TextInputProps
  textInputPropsResize?: TextInputProps
}

export interface InputTextYrlType
  extends React.FunctionComponent<InputTextYrlPropsType> {
  (props: InputTextYrlPropsType): React.ReactElement
}
