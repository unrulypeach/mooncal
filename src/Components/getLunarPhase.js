const getLunarPhase = (date = new Date()) => {
  const age = getLunarAge(date);  
  
  if (age < 1.84566)
    return "New";
  else if (age < 5.53699)
    return "Waxing Crescent";
  else if (age < 9.22831)
    return "First Quarter";
  else if (age < 12.91963)
    return "Waxing Gibbous";
  else if (age < 16.61096)
    return "Full";
  else if (age < 20.30228)
    return "Waning Gibbous";
  else if (age < 23.99361)
    return "Last Quarter";
  else if (age < 27.68493)
    return "Waning Crescent";  
    
  return "New";
}