import React, { ChangeEvent, useRef, useState } from "react"

export default {
	title: 'inputs'
}

export  const UnControledInput = () => {
	const [state, setState] = useState('')
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setState(e.currentTarget.value)
	}
	return (
		<><input onChange={onChange} /> - {state}</>
	)
}
export const ControledRefInput = () => {
	const [state, setState] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const save = () => {
		const valueInput = inputRef.current as HTMLInputElement
		setState(valueInput.value)
	}
	return (
		<><input ref={inputRef}/> <button onClick={save}>save</button>- {state}</>
	)
}
export const ControledSelectInput = () => {
	const [state, setState] = useState<string | undefined >('')
	const save = (e: ChangeEvent<HTMLSelectElement>) => {
		setState(e.currentTarget.value)
	}
	return (
		<select value={state} onChange={save} >
			<option>sweets</option>
			<option value="bread">bread</option>
			<option value="butter">butter</option>
			<option value="milk">milk</option>
		</select>
	)
}

export const ControledInput = () => {
	const [state, setState] = useState<string>('')
	const save = (e: ChangeEvent<HTMLInputElement>) => {
		setState(e.currentTarget.value)
	}
	return (
		<input value={state} onChange={save} />
	)
}