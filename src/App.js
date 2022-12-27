import Calendar from "./Components/Calendar";

function App() {
  const yearOfMonths = [];
  function oneYearofCals(year) {
    for (let i=1; i<= 12; i+=1) {
      if (i < 10) {
        yearOfMonths.push(<Calendar month={`0${i}`} year={year}/>)
      } else {
        yearOfMonths.push(<Calendar month={`${i}`} year={year}/>)
      }
    }
  }
  oneYearofCals("2023");
  return (
    <div className="App border">
      {yearOfMonths}
    </div>
  );
}

export default App;
