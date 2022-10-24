import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ViewMore } from '@/components/atoms/buttons/ViewMore'

export default {
  title: 'Components/Atoms/btns/ViewMore',
  component: ViewMore,
} as ComponentMeta<typeof ViewMore>

const Template: ComponentStory<typeof ViewMore> = () => (
  <ViewMore path="/">VIEW MORE</ViewMore>
)

export const All = Template.bind({})
