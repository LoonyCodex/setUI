import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'
import { H1, Time } from 'typography'

export default [
  {
    group: displayName,
    name: 'Обложка',
    code: render(
      <Component
        image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg"
        color="white"
      >
        <H1>Центрированный заголовок</H1>
      </Component>
    ),
  },
  {
    group: displayName,
    name: 'Обложка с датой',
    code: render(
      <Component
        image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg"
        color="white"
      >
        <Time>04.12.1995</Time>
        <H1>Центрированный заголовок</H1>
      </Component>
    ),
  },
]
