import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '22.5rem',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const ToastClose = styled('button', {
  backgroundColor: '$gray800',
  border: 'none',
  padding: 'unset',

  position: 'absolute',
  top: '$4',
  right: '$4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
  },
})

export const ToastTitle = styled('span', {
  color: '$white',
  fontSize: '$xl',
  fontFamily: '$default',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled('span', {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$regular',
  lineHeight: '$base',
})
