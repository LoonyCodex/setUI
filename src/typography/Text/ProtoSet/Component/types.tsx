import type {
  BackgroundColorType,
  ColorType,
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  FontWeightType,
  TextAlignProps,
  TextAlignType,
  TextDecorationColorType,
  TextDecorationLineType,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextTransformType,
  TransformPropsType,
  PaddingSizeType,
  PaddingType,
} from 'CSS'

export type AsType =
  | 'span'
  | 'strong'
  | 'em'
  | 'i'
  | 'b'
  | 'dfn'
  | 'abbr'
  | 'sup'
  | 'sub'
  | 'mark'
  | 'cite'
  | 'u'
  | 's'
  | 'small'

type BasicProps = {
  as: AsType
  className?: string
  title?: string
}

type StyleProps = {
  background?: BackgroundColorType
  color?: ColorType

  overline?: boolean
  lineThrough?: boolean
  underline?: boolean
  decorationColor?: TextDecorationColorType
  decorationLine?: TextDecorationLineType
  decorationStyle?: TextDecorationStyleType
  decorationThickness?: TextDecorationThicknessType

  transform?: TextTransformType

  type?: FontFamilyType
  size?: FontSizeType
  style?: FontStyleType
  weight?: FontWeightType
} & TransformPropsType &
  TextAlignProps

export type { PaddingType } from 'CSS'
export type Props = BasicProps & StyleProps & PaddingType
export type PropsRequired = BasicProps &
  Required<StyleProps> &
  Required<PaddingType>
