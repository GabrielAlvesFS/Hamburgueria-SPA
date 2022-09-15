import { InputLabelStyle } from './style';

export function InputLabel({ labelName, placeholderName }) {
  return (
    <InputLabelStyle>
      <label htmlFor="input">{labelName}</label>
      <input type="text" id="input" placeholder={placeholderName} />
    </InputLabelStyle>

  );
}
