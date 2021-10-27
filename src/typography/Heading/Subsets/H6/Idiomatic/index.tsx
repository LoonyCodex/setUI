import { FC } from 'react'
import cn from 'classnames'
import { useColor, useFontSize } from 'layers/Text'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'
import { ClassName } from '../styles.css'

export const displayName = 'H6'

const H6: FC<Props> = ({ className, ...props }) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...defaultProps,
    ...props,

    // override
    level: 6,
    className: cn(ClassName, className),
    color: props?.color || color || defaultProps.color,
    fontSize: props?.fontSize || fontSize || defaultProps.fontSize,
  })
}

H6.displayName = displayName

export default H6
