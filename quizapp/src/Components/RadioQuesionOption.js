import { useState } from 'react';
import './RadioQuestionOption.css'

function RadioQuestionOption({Question, Option}) {
  const [checked, setChecked] = useState(false);


    return (
       <label htmlFor={Question} className="OptionLabel" >
         <input type="radio" name={Question} checked={checked} value={Option} className="OptionRadio" onClick={()=>setChecked(true)} />
         {Option}
       </label>
    )
}

export default RadioQuestionOption;