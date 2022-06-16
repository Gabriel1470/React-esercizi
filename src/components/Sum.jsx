export function Sum(props,{numbers =[3,3,4,4,1]}) {
  return (
      <h1>Sum:
          {props.numbers.reduce((total, current) => { return (total += current) })}
          {numbers.reduce((total, current) => { return (total += current) })}
      </h1>
  )
}