import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Heading } from '@/components/atoms/text/Heading'

export default {
  title: 'Components/Atoms/text/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = () => (
  <Heading>Heading</Heading>
)

export const Main = Template.bind({})
