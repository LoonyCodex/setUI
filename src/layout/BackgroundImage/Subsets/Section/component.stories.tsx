import React from 'react'
import { Story, Meta } from '@storybook/react'
import { argTypes as blockArgTypes } from 'layers/Block'
import { argTypes as flexArgTypes } from 'layers/Flex'
import { defaultProps } from './defaultProps'
import Component, { Props, displayName } from './'

export default {
  component: Component,
  title: `Typography/${displayName}`,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.args = {
  ...defaultProps,
  image:
    'https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg',
  children: `<${displayName}>`,
}

Default.argTypes = {
  ...blockArgTypes,
  ...flexArgTypes,
}
