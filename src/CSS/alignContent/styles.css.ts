import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'center',
  'start',
  'end',
  'flexStart',
  'flexEnd',
  'normal',
  'baseline',
  'firstBaseline',
  'lastBaseline',
  'spaceBetween',
  'spaceAround',
  'spaceEvenly',
  'stretch',
  'safeCenter',
  'unsafeCenter',
  'unset',
  'normal',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  center: 'center',
  start: 'start',
  end: 'end',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  normal: 'normal',
  baseline: 'baseline',
  firstBaseline: 'first baseline',
  lastBaseline: 'last baseline',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
  stretch: 'stretch',
  safeCenter: 'safe center',
  unsafeCenter: 'unsafe center',
  unset: 'unset',
}

const Styles = mapToStyles(map, (value: any) => ({
  alignContent: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['normal' as Type],
}
