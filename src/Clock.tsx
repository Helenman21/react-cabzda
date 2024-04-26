import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Clock.css'

const Clock = () => {
// 	var second_arrow = document.querySelector('.clock-hand__second');
// var minute_arrow = document.querySelector('.clock-hand__minute');
// var hour_arrow = document.querySelector('.clock-hand__hour');
// console.log(second_arrow);

// function clock(){
	const [date, setDate] = useState(new Date)
	useEffect(() => {
		// При монтировании/обновлении запускаем интервал
		
		const intervalId = setInterval(() => {
					setDate(new Date())
		}, 1000)
		
		return () => {
		  // При размонтировании/до обновления interval останавливаем
		  // существующий интервал
		  setTimeout(() => { clearInterval(intervalId); console.log('stop')});
		  //clearInterval(intervalId);
		};
		}, []);

// 	// var d = new Date(2020, 10, 16, 12, 50, 45);
	const d = new Date();
	const second = date.getSeconds();
	const minute = date.getMinutes();
	const hour = date.getHours();
// 	console.log(hour, minute, second);

// 	// считаем угол поворота стрелок
	const ss = second * 6;
	const mm = minute * 6;
	const hh = hour * 30 + mm / 12;

// 	// секундная стрелка
// 	second_arrow.style.transform = `rotate(${ss}deg)`;
const classTransformSs = {
	transform:`rotate(${ss}deg)`
}
const classTransformMm = {
	transform:`rotate(${mm}deg)`
}
const classTransformHh = {
	transform:`rotate(${hh}deg)`
}

	return (
		<div className='clock-box'>

			<div className='arrow-helper a1'></div>
			<div className='arrow-helper a2'></div>
			<div className='arrow-helper a3'></div>
			<div className='arrow-helper a4'></div>
			<div className='arrow-helper a5'></div>
			<div className='arrow-helper a6'></div>

			<div className='number n01'>01</div>
			<div className='number n02'>02</div>
			<div className='number n03'>03</div>
			<div className='number n04'>04</div>
			<div className='number n05'>05</div>
			<div className='number n06'>06</div>
			<div className='number n07'>07</div>
			<div className='number n08'>08</div>
			<div className='number n09'>09</div>
			<div className='number n10'>10</div>
			<div className='number n11'>11</div>
			<div className='number n12'>12</div>

			<div className='clock-hands-box'>
				<div className='clock-hand__second' style={classTransformSs}></div>
				<div className='clock-hand__minute' style={classTransformMm} ></div>
				<div className='clock-hand__hour' style={classTransformHh}></div>
			</div>

		</div>
	);
};



export default Clock;