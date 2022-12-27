import moment from 'moment';
import React from 'react';
import { Moon } from "lunarphase-js";

export default function Calendar({ month, year }) {
  let weekdayshort = moment.weekdaysShort();

  let weekdayshortname = weekdayshort.map(day => {
    return (
      <th key={day} className="week-day border w-20 h-20">
       {day.toLowerCase()}
      </th>
    );
 });


  const firstDayOfMonth = () => {
    return moment(`${year}-${month}`, "YYYY-MM").startOf("month").format("d");
  }

  const blanks = [];

  for (let i=0; i< Number(firstDayOfMonth()); i+=1) {
    blanks.push(<td className="calendar-day empty border w-20 h-20">{""}</td>)
  }

  const daysInMonth = [];
  
  for (let i=1; i <= moment(`${year}-${month}`, "YYYY-MM").daysInMonth(); i+=1){
    let curr = Math.round(Moon.lunarAge(new Date(year, month-1, i)) * 100) / 100
    daysInMonth.push(<td className='calendar-day border w-20 h-20'>{i}-{curr}</td>)
  }

  return (
    <>
    <h2>{month},{year}</h2>
    <div>
      {weekdayshortname}
    </div>
    <div className='grid grid-cols-7 w-max'>
      {blanks}
      {daysInMonth}
    </div>
    </>
  )
}