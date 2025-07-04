import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  width: 'max-content',
  backgroundColor: 'transparent',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const TooltipContent = styled('div', {
  display: 'inline-flex',

  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: 16,

  color: '$gray100',
  fontFamily: '$default',
  fontWeight: '$medium',
})

export const TooltipArrow = styled('div', {
  borderLeft: '8px solid transparent',
  borderRight: '8px solid transparent',
  borderTop: '8px solid $gray900',
})
