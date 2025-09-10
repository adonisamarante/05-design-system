import { ComponentProps } from 'react'
import { ToastContainer, ToastContent } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  children: React.ReactNode
}

export function Toast({ children, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastContent>{children}</ToastContent>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
