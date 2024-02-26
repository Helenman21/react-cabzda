import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';
import { Accordion } from '../Accordion';






const meta: Meta<typeof Accordion> = {
  component: Accordion,
};
// export default {
// 	component: Accordion
// }
export default meta;
type Story = StoryObj<typeof Accordion>;

export const AccordionControlsTest: Story = {
  args: {
    isOn: false,
	 onClick: () => {},
	 name: 'test'
  },
};
export const CollapsedAccordeon = () => {
	return <Accordion isOn={true} onClick={() => {}  } name='accordion'/>
}
export const OpenedAccordeon = () => {
	return <Accordion isOn={false} onClick={() => {}} name='accordion'/>
}

export const OpenOrCloseAccordeon = () => {
	const [state, setState] = useState(false)
	return (
		<section className='section-accordion' >
				<Accordion isOn={state} onClick={() => {}} name = {'this is accordion'}/>
				<button onClick={() => setState(!state)} >+</button>
		</section>
	)
}