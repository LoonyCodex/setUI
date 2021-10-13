import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

const displayName = 'Text.Idiomatic'

const Idiomatic: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    as: 'i',
    className: cn(ClassName, className),
  })

Idiomatic.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Idiomatic