import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    children: '26 de Outubro - Disponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
