import { unstable_useId } from '@mui/material';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import styles from './CustomSelect.module.css'

export const cities: CustomSelectStateCitiesProps[] = [
	{name: "Minsk", id: new Date().toString()},
	{name: "Moscow", id: new Date().toString()},
	{name: "Krim", id: new Date().toString()},
	{name: "Samara", id: new Date().toString()},
	{name: "Sochi", id: new Date().toString()},
	{name: "Moscow", id: new Date().toString()},
	{name: "Aban", id: new Date().toString()},
	{name: "Adjo", id: new Date().toString()},
]
//comment
export type CustomSelectStateCitiesProps = {
 name: string
 id: string
}
//comment
type CustomSelectProps = {
	items: CustomSelectStateCitiesProps[]
	currentValueCustomSelect: string
	changeActualValueCustomSelect: (newItem: string) => void
	callbackAddItemsCustomSelect?: (valueInput: string) => void
}
const CustomSelect = React.memo(({items, currentValueCustomSelect, changeActualValueCustomSelect, callbackAddItemsCustomSelect}: CustomSelectProps) => {
	console.log(`customSelect`)
	const [valueInput, setValueInput] = useState('')
	const [isOpenList, setIsOpenList] = useState(false)
	const [hoveredElementValue, setHoveredElementValue] = useState(currentValueCustomSelect)
	const hoveredItem = items.find(i => i.name === hoveredElementValue )
	const onChangeValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValueInput(e.currentTarget.value)
	}
	const onChangeStateOpenList = () => {
		setIsOpenList(!isOpenList)
	}
	const onChangeActualValueCastomSelect = (item: string) => {
		changeActualValueCustomSelect(item)
		setIsOpenList(!isOpenList)
	}
	const onAddItemCustomSelect = () => {
		if(valueInput.length > 0){
			console.log('add item')
			if(callbackAddItemsCustomSelect){
				callbackAddItemsCustomSelect(valueInput)
			}
			setValueInput('')
			setIsOpenList(!isOpenList)
		}
	}
	const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
		if(e.key === 'ArrowUp' || e.key ==='ArrowDown') {
			for (let i =0; i < items.length; i++){
				if(items[i].name === hoveredElementValue){
					const pretendentElement = e.key === 'ArrowDown' ? items[i+1].name : items[i-1].name
					if(pretendentElement){
						setHoveredElementValue(pretendentElement)
						changeActualValueCustomSelect(pretendentElement)
						return
					}
				}
			}
			// if(!currentValueCustomSelect){
			// 	onChangeActualValueCastomSelect(items[0])
			// }
			}
			if(e.key === 'Enter' || e.key === 'Escape'){
				setIsOpenList(false)
			}
	}
	return (
		<div className={styles.select} onKeyUp={onKeyUp } >
			<span onClick={onChangeStateOpenList} className={styles.main} tabIndex={0} >{currentValueCustomSelect}</span>
			{isOpenList && items.map((item, index) => <div tabIndex={index+1}
															className={styles.item + ' ' + (hoveredItem === item? styles.selected : '')} 
															key={item.id}
															onClick={() => onChangeActualValueCastomSelect(item.name)}
															onMouseEnter={() => {setHoveredElementValue(item.name)}} >{item.name}</div>)}
																
			<div className={styles.items}>
				<input value={valueInput} onChange={onChangeValueInputHandler} />
				<button onClick={onAddItemCustomSelect} >save</button>
			</div>
		</div>
	
	);
});

export default CustomSelect;