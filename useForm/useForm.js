import { useState } from "react";

export const useForm = (initialForm = {}) => {
   const [formState, setFormState] = useState(initialForm)
  
   const onInputChange = ({target})=>{
      //el target contiene el name y el value
      //el name contiene el campo que cambia
      const {name, value} = target;
      setFormState({
        ...formState,
        [name]:value,
      })
   }
   const onResetForm = ()=>{
      setFormState(initialForm)
   }

    return{
       ...formState, 
       onInputChange,
       onResetForm
    }
}
