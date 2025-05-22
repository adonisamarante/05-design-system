import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae officia eaque! Quasi fugiat soluta ea nobis delectus quia doloremque animi eaque iusto illum, saepe asperiores dolore, placeat sed consequuntur?'
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}
