import {useState} from 'react';

export function useInput (defaultValue, validateFn) {
  const [enteredValue, setEnteredValue] = useState (defaultValue);
  const [didEdit, setDidEdit] = useState (false);

  const valueIsValid = validateFn (enteredValue);

  const handleInputBlur = identifier => {
    setDidEdit (true);
  };
  const handleChange = event => {
    setEnteredValue (event.target.value);
    setDidEdit (false);
  };
  return {
    value: enteredValue,
    handleChange,
    handleInputBlur,
    hasError: didEdit & !valueIsValid,
  };
}
