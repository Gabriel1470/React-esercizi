import { Counter } from "./Counter";

export class CounterDisplay extends Counter{

  render(){
    return(
     <h1><Counter initValue={0} increment={8} interval={1500}/></h1>
    )
  }
}