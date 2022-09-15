import { InputLabelStyle } from './style';

export function InputLabel({
  labelName, placeholderName, inputWidth, inputHeight,
}) {
  return (
    <InputLabelStyle inputWidth={inputWidth} inputHeight={inputHeight}>
      <label htmlFor="input">{labelName}</label>
      <input type="text" id="input" placeholder={placeholderName} />
    </InputLabelStyle>

  );
}
