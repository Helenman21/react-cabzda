
import './App.css';
import { Accordion } from './Accordion';
import { Rating } from './Rating';
import { Buttons } from './Buttons';
import React, { useState } from 'react';
import CustomSelect, { cities } from './CustomSelect';
import { CustomSelectUseMemo } from './stories/SelectTutorialUseMemo.stories';

const AccordionMemo = React.memo(Accordion)
const RatingMemo = React.memo(Rating)
const ButtonsMemo = React.memo(Buttons)

function App() {
	const [stateAccordion, setStateAccordion] = useState(false)
	const [stateOneOff, setStateOneOff] = useState(false)
	const [itemsCustomSelect, setItemsCustomSelect] = useState(cities)
	const [currentValueCustomSelect, setCurrentValueCustomSelect] = useState<string>('user1')
	const callbackAddItemsCustomSelect = (item: string) =>{
		setItemsCustomSelect([...itemsCustomSelect, {name: 'newCity', id: new Date().toString()}])
	}
	const changeActualValueCustomSelect = (newItem: string) => {
		const currentValue = itemsCustomSelect.find(item => item.name === newItem)
		if(currentValue){
			setCurrentValueCustomSelect(currentValue.name)
		}
		
	}

	return (
		 <div className="App">
			{/* <AccordionMemo isOn={stateAccordion} onClick={setStateAccordion} name='this is accordion' />
			<RatingMemo value={3}/>
			<ButtonsMemo isOne={stateOneOff} onClick={(isOne) => setStateOneOff(isOne)} />
			<CustomSelect currentValueCustomSelect={currentValueCustomSelect} 
							  changeActualValueCustomSelect={changeActualValueCustomSelect} 
							  items={itemsCustomSelect}
							  callbackAddItemsCustomSelect={callbackAddItemsCustomSelect} /> */}
			<CustomSelectUseMemo/>				  
		 </div>
	);
}

export default App;
