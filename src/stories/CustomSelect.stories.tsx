
import React, { useState } from 'react';

import { Meta, StoryObj } from "@storybook/react";
import {action} from '@storybook/addon-actions'
import CustomSelect, { cities, CustomSelectStateCitiesProps } from '../CustomSelect';


// export default{
// 	title: 'OneOff stories',
// 	component: Buttons
// }
const meta: Meta<typeof CustomSelect> = {
	component: CustomSelect,
 };

export default meta;
type Story = StoryObj<typeof CustomSelect>;

 
 export const CustomSelectControlsTest: Story = {
	args: {
	 items: cities,
	 changeActualValueCustomSelect: () => {callBackCangeActualValue()},
	 callbackAddItemsCustomSelect: () => {callBackAddItem()},
	 currentValueCustomSelect: 'user'
	},
 };
const callBackCangeActualValue = action('on or of clicked')
const callBackAddItem =  action('add item')

export const CustomSelectOpenOrClosed = () => {
const [itemsCustomSelect, setItemsCustomSelect] = useState<CustomSelectStateCitiesProps[]>(cities)
const [currentValueCustomSelect, setCurrentValueCustomSelect] = useState<string>('user1')
const callbackAddItemsCustomSelect = (item: string) =>{
	setItemsCustomSelect([...itemsCustomSelect, {name: item, id: new Date().toString()}])
}
const changeActualValueCustomSelect = (newItem: string) => {
	const currentValue = itemsCustomSelect.find(item => item.name === newItem)
	if(currentValue){
		setCurrentValueCustomSelect(currentValue.name)
	}
}	
	return (<CustomSelect changeActualValueCustomSelect={changeActualValueCustomSelect} callbackAddItemsCustomSelect={callbackAddItemsCustomSelect} items={itemsCustomSelect} currentValueCustomSelect={currentValueCustomSelect} />)
}
