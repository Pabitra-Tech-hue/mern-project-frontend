import react from "react"
interface IProps{
    label:string;
    type?:"reset" | "submit" |"button"
}
const Button = ({label, type="button"}:IProps) => {


  return (

    <button type={type}
    className=" cursor-pointer w-full bg-amber-200 text-white font-bold  text-lg py-3.5
    rounded-md hover:bg-teal-500 active:bg-teal-700 transition-all duration-300">
        {label}

    </button>
    
  )
}

export default Button