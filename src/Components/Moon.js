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

  return (
    <div class="sphere m-auto">
      {(degrees < 180) ? 
        <>
          <div class="light hemisphere"></div>
          <div class="dark hemisphere"></div>
        </> : 
        <>
          <div class="dark hemisphere"></div> 
          <div class="light hemisphere"></div>
        </>}
      <div class="divider" style={{transform: `rotate3d(0, 1, 0, ${degrees}deg)`}}></div>
    </div>
  )
}