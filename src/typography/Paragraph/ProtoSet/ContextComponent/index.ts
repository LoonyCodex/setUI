import { VFC, createElement, cloneElement } from 'react'
import Component from '../Component'
import { ColorContext, FontSizeContext } from 'layers'
import type { Props } from './types'

const ContextComponent: VFC<Props> = (props) =>
  [
    createElement(ColorContext.Provider, {
      value: props.color,
    }),

    createElement(FontSizeContext.Provider, {
      value: props.fontSize,
    }),
  ].reduce(
    (prev, provider) => cloneElement(provider, {}, prev),
    Component(props)
  )

export type { Props } from './types'
export default ContextComponent
