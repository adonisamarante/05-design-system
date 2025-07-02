import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: React.ReactNode
}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <TooltipContent>{children}</TooltipContent>
      <TooltipArrow />
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
