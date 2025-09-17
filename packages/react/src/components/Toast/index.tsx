import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastClose>
        <X color="white" size={20} />
      </ToastClose>
      <ToastTitle>{title}</ToastTitle>
      {description && <ToastDescription>{description}</ToastDescription>}
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
