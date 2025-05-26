import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { Component } from 'react'

export interface AvatarProps extends Component<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <>
      <AvatarContainer>
        <AvatarImage {...props} />

        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </>
  )
}
