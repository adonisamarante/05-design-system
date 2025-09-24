import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@adonis-ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
}

export const NoDescription: StoryObj<ToastProps> = {
  args: {
    title: 'Cadastrado com sucesso!',
  },
}
