import { Counter } from "./Counter";

export class CounterDisplay extends Counter{

  render(){
    return(
     <h1><Counter initValue={0} increment={3} interval={500}/></h1>
    )
  }
}