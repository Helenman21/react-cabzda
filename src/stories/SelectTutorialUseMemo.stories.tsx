
import React, { useMemo, useState } from 'react';
import CustomSelect, { cities, CustomSelectStateCitiesProps } from '../CustomSelect';

export const CustomSelectUseMemo = () => {
	const [itemsCustomSelect, setItemsCustomSelect] = useState<CustomSelectStateCitiesProps[]>(cities)
	const [countValueCustomSelect, setCurrentCountValueCustomSelect] = useState<number>(0)
	const [currentCityLengthFour, setCurrentCityLengthFour] = useState<string>(cities[2].name)
	const [currentCityIncludesLetterM, setCurrentCityIncludesLetterM] = useState<string>(cities[0].name)
	const [currentCityIdTwo, setCurrentCityIdTwo] = useState<string>(cities[1].name)
	const callbackAddItemsCustomSelect = () => {
		setCurrentCountValueCustomSelect(prev => prev + 1)
		console.log('inc')
	}
	const changeActualValueCitiesLengthFour = React.useCallback((newItem: string) => {
		const currentValue = itemsCustomSelect.find(item => item.name === newItem)
		if (currentValue) {
			setCurrentCityLengthFour(currentValue.name)
		}
	}, [itemsCustomSelect])
	const changeActualValueIncludesLetterM = React.useCallback((newItem: string) => {
		const currentValue = itemsCustomSelect.find(item => item.name === newItem)
		if (currentValue) {
			setCurrentCityIncludesLetterM(currentValue.name)
		}
	}, [itemsCustomSelect])
	const changeActualValueCurrentCityIdTwo = React.useCallback((newItem: string) => {
		const currentValue = itemsCustomSelect.find(item => item.name === newItem)
		if (currentValue) {
			setCurrentCityIdTwo(currentValue.name)
		}
	}, [itemsCustomSelect])
	const itemsForSelectCitiesLendthFour = useMemo(() => {
		return itemsCustomSelect.filter(item => item.name.length === 4)
	}, [itemsCustomSelect])
	const itemsForSelectCitiesIncludesLetterM = useMemo(() => {
		return itemsCustomSelect.filter(item => item.name.toLowerCase().indexOf('m') > -1)
	}, [itemsCustomSelect])
	const itemsForSelectCitiesIdTwo = useMemo(() => {
		return itemsCustomSelect.filter((item, index) => item)
	}, [itemsCustomSelect])
	return (
		<div>
			<CustomSelect
				changeActualValueCustomSelect={changeActualValueCitiesLengthFour}
				items={itemsForSelectCitiesLendthFour}
				currentValueCustomSelect={currentCityLengthFour}
			/>
			<CustomSelect changeActualValueCustomSelect={changeActualValueIncludesLetterM} 
								items={itemsForSelectCitiesIncludesLetterM} 
								currentValueCustomSelect={currentCityIncludesLetterM} />
			<CustomSelect changeActualValueCustomSelect={changeActualValueCurrentCityIdTwo} 
								items={itemsForSelectCitiesIdTwo} 
								currentValueCustomSelect={currentCityIdTwo} />		 
			<span onClick={callbackAddItemsCustomSelect} >Cчетчик = {countValueCustomSelect}</span>
		</div>
	)
}
export default {
	title: 'Custom select useMemo',
	component: CustomSelectUseMemo
}