import { GreetTypes } from "./Greet.types"

export const Greet = (props : GreetTypes) => {
  return (
    <div>Hello {props.name}</div>
  )
}