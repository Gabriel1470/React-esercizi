import { ClickCounter } from "./ClickCounter";

export class CounterDisplay extends ClickCounter{

  render(){
    return(
     <h1><ClickCounter initValue={0} increment={1} interval={1500}/></h1>
    )
  }
}