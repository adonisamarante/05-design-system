import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  display: 'inline-flex',

  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '16px',

  color: '$gray100',
  fontWeight: '$medium',
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = 'Tooltip'
