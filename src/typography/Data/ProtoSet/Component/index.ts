import { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  ColorLayer,
  TextDecorationLayer,
  FontLayer,
  TextTransformLayer,
} from 'layers'
import { Props as ProtoProps, NodeProps } from './types'
import { ClassName } from './styles.css'

type Props = ProtoProps & NodeProps

const Data: VFC<Props> = ({
  value,
  title,
  className,

  children,

  // text
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  textDecorationColor,
  textDecorationLine,
  textDecorationStyle,
  textDecorationThickness,
  textTransform,

  ...rest
}) =>
  createElement(
    'data',
    {
      className: cn([
        className,
        ClassName,

        ColorLayer({
          color,
        }),

        TextDecorationLayer({
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
        }),

        FontLayer({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
        }),

        TextTransformLayer({
          textTransform,
        }),
      ]),
      value,
      title,
      ...rest,
    },
    children
  )

export type { Props, NodeProps } from './types'
export default Data