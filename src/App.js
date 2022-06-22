import CarDetails from "./Components/CarDetail";


function App() {

  const data = {
    model: 'Lambo',
    color: 'Purple',
    year: 2021
  }

  return (
    <div >
   <CarDetails info={data}/>
    </div>
  );
}

export default App;
