import { FC } from 'react'
import Component, { Props } from '../../Component/Segment'

const Column: FC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: 'column',
    ...props,
  })

export default Column
