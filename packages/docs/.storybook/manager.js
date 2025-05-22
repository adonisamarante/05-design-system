import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'
import preview from './preview'

addons.setConfig({
  theme: themes.dark,
})
