import { FC } from 'react'
import Component, { Props } from '../../Component/Segment'

const Row: FC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: 'row',
    ...props,
  })

export default Row
