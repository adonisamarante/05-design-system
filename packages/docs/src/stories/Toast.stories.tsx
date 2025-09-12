import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    children: 'Agendamento realizado',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
