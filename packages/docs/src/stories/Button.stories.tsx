import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonPropsTypes } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: "Enviar",
  },
} as Meta<ButtonPropsTypes>

export const Primary: StoryObj<ButtonPropsTypes> = {
  
}

export const Big: StoryObj<ButtonPropsTypes> = {
  args: {
    size: 'big'
  }
}