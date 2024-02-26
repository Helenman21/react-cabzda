
import React, { useState } from 'react';

import { Meta, StoryObj } from "@storybook/react";
import {action} from '@storybook/addon-actions'
import { Buttons } from '../Buttons';

// export default{
// 	title: 'OneOff stories',
// 	component: Buttons
// }
const meta: Meta<typeof Buttons> = {
	component: Buttons,
 };
 // export default {
 // 	component: Accordion
 // }
 export default meta;
 type Story = StoryObj<typeof Buttons>;
 
 export const ButtonsControlsTest: Story = {
	args: {
	 
	},
 };
 const callBack = action('on or of clicked')
export const ButtonsOneOff = () => {
	return (<Buttons isOne={true} onClick={callBack}/>)
}
