import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: 'max-content',
  backgroundColor: 'transparent',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ToastContent = styled('div', {
  display: 'inline-flex',

  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: 16,

  color: '$gray100',
  fontFamily: '$default',
  fontWeight: '$medium',
})
