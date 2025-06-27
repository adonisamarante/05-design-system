import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  padding: '$4 $3',
})

export interface TextProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = 'Text'
