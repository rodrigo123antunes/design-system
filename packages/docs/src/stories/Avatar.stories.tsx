import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@bonapaz-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/rodrigo123antunes.png',
    alt: 'Rodrigo Antunes',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}