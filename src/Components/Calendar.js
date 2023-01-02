import moment from 'moment';
import React from 'react';
import Moon from './Moon';

export default function Calendar({ month, year }) {
  let weekdayshort = moment.weekdaysShort();
  let weekdayshortname = weekdayshort.map(day => {
    return (
      <th key={day} className="week-day text-lg font-normal align-middle w-[150px] h-20">
       {day.toLowerCase()}
      </th>
    );
 });

  const firstDayOfMonth = () => {
    return moment(`${year}-${month}`, "YYYY-MM").startOf("month").format("d");
  }

  const blanks = [];
  for (let i=0; i< Number(firstDayOfMonth()); i+=1) {
    blanks.push(<td className="calendar-day empty w-[150px] h-[150px]">{""}</td>)
  }

  const daysInMonth = [];
  for (let i=1; i <= moment(`${year}-${month}`, "YYYY-MM").daysInMonth(); i+=1){
    daysInMonth.push(<td className={`calendar-day month${month} w-[150px] h-[150px] p-1`}>
      <span className='py-2 px-3'>{i}</span>
      <Moon date={new Date(year, month-1, i)}/>
    </td>)
  }

  return (
    <div className='my-14 mx-10'>
      <div className='p-3 w-36 flex flex-col items-center'>
        <h1 className='text-8xl'>{Number(month)}</h1>
        <h2 className='text-xl'>{moment().month(month-1).format("MMMM")}</h2>
        <h3>{year}</h3>
      </div>
      <div>
        {weekdayshortname}
      </div>
      <div className='grid grid-cols-7 w-max'>
        {blanks}
        {daysInMonth}
      </div>
    </div>
  )
}