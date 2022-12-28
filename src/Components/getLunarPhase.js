// const getLunarPhase = (date = new Date()) => {
//   const age = getLunarAge(date);  
  
//   if (age < 1.84566)
//     return "New";
//   else if (age < 5.53699)
//     return "Waxing Crescent";
//   else if (age < 9.22831)
//     return "First Quarter";
//   else if (age < 12.91963)
//     return "Waxing Gibbous";
//   else if (age < 16.61096)
//     return "Full";
//   else if (age < 20.30228)
//     return "Waning Gibbous";
//   else if (age < 23.99361)
//     return "Last Quarter";
//   else if (age < 27.68493)
//     return "Waning Crescent";  
    
//   return "New";
// }

const getLunarPhase = (date = new Date()) => {
  const age = getLunarAge(date);  
  
  if (age <= 1)
    return "New";
  else if (age < 6.382647)
    return "Waxing Crescent";
  else if (age < 8.382647)
    return "First Quarter";
  else if (age < 13.765294)
    return "Waxing Gibbous";
  else if (age < 15.765294)
    return "Full";
  else if (age < 21.147941)
    return "Waning Gibbous";
  else if (age < 23.147941)
    return "Last Quarter";
  else if (age < 28.530588)
    return "Waning Crescent";  
    
  return "New";
}