import { createElement, cloneElement, VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../ProtoSet'
import { ClassName } from './styles.css'
import { ARTICLE } from 'axioms'
import { FontSizeContext } from 'layers'

export const displayName = 'Frame'

const Set: VFC<Props> = ({ children, className, fontSize, ...props }) =>
  [
    createElement(FontSizeContext.Provider, {
      value: fontSize,
    }),
  ].reduce(
    (prev, provider) => cloneElement(provider, {}, prev),
    ProtoSet({
      fontSize,

      ...object.mergePropsWithWarning(defaultProps, props),

      // props override
      children,
      as: 'div',
      className: cn(ClassName, className, ARTICLE),
    })
  )

Set.displayName = displayName

export type { Props } from './types'
export default Set