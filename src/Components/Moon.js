import moment from "moment"

export default function Moon({ date }) {
  const getMoonPhaseRotation = date => {
    const cycleLength = 29.5 // days
  
    const knownNewMoon = new Date('2022-03-02 12:38:00')
    const secondsSinceKnownNewMoon = (date - knownNewMoon) / 1000
    const daysSinceKnownNewMoon = secondsSinceKnownNewMoon / 60 / 60 / 24
    const currentMoonPhasePercentage = (daysSinceKnownNewMoon % cycleLength) / cycleLength
  
    return 360 - Math.floor(currentMoonPhasePercentage * 360)
  }

  const degrees = getMoonPhaseRotation(date);

  const fullMoonDates = [
    new Date('2023/01/06'),
    new Date('2023/02/05'),
    new Date('2023/03/07'),
    new Date('2023/04/06'),
    new Date('2023/05/05'),
    new Date('2023/06/03'),
    new Date('2023/07/03'),
    new Date('2023/08/01'),
    new Date('2023/08/30'),
    new Date('2023/09/29'),
    new Date('2023/10/28'),
    new Date('2023/11/27'),
    new Date('2023/12/26'),
  ];

  const newMoonDates = [
    new Date('2023/01/21'),
    new Date('2023/02/20'),
    new Date('2023/03/21'),
    new Date('2023/04/20'),
    new Date('2023/05/19'),
    new Date('2023/06/18'),
    new Date('2023/07/17'),
    new Date('2023/08/16'),
    new Date('2023/09/14'),
    new Date('2023/10/14'),
    new Date('2023/11/13'),
    new Date('2023/12/22'),
  ];

  return (
    <div 
      className={`sphere ${(moment(date).format('MMM')).toLowerCase()} m-auto ${(fullMoonDates.some(el => +date === +el)) ? 'fullmoon' : ''}`}
      >
      {(degrees < 180) ? 
        <>
          <div className="light hemisphere"></div>
          <div className="dark hemisphere"></div>
        </> : 
        <>
          <div className="dark hemisphere"></div> 
          <div className="light hemisphere"></div>
        </>}
      <div className="divider" style={{transform: `rotate3d(0, 1, 0, ${(newMoonDates.some(el => +date === +el)) ? 0 : degrees}deg)`}}></div>
    </div>
  )
}