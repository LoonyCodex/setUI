import { FC } from 'react'
import Component, { Props } from '../../Component'

const x1x1: FC<Omit<Props, 'aspectRatio'>> = (props) =>
  Component({
    aspectRatio: '1x1',
    ...props,
  })

export default x1x1
