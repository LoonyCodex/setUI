import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  BackgroundColor,
  Color,
  TextAlign,
  TextDecorationColor,
  TextDecorationLine,
  textDecorationResolve,
  TextDecorationStyle,
  TextDecorationThickness,
  textTransformResolve,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  paddingResolve,
} from 'CSS'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Text: FC<PropsRequired> = ({
  // basic
  as,
  title,
  className,

  // styles
  background,
  color,

  align,

  overline,
  lineThrough,
  underline,
  decorationColor,
  decorationLine,
  decorationStyle,
  decorationThickness,

  type,
  size,
  style,
  weight,

  children,

  ...rest
}) => {
  const { paddingTop, paddingRight, paddingBottom, paddingLeft } =
    paddingResolve<Partial<PropsRequired>>(rest)

  return createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
        BackgroundColor[background] || BackgroundColor.default,
        Color[color] || Color.black,

        TextAlign[align] || TextAlign.left,

        TextDecorationColor[decorationColor] || TextDecorationColor.default,
        textDecorationResolve({
          isOverLine: overline,
          isThrowLine: lineThrough,
          isUnderLine: underline,
        }),
        TextDecorationStyle[decorationStyle] || TextDecorationStyle.default,
        TextDecorationThickness[decorationThickness] ||
          TextDecorationThickness.initial,
        textTransformResolve<Partial<PropsRequired>>(rest),

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontStyle[style] || FontStyle.default,
        FontWeight[weight] || FontWeight.inherit,

        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
      ]),
      title,
    },

    children
  )
}

export type { Props, PropsRequired, PaddingType } from './types'

export default Text
