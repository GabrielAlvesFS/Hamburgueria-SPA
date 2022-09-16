import { InputLabelStyle } from './style';

export function InputLabel({
  labelName, placeholderName, inputWidth, inputHeight, inputType, required, gap,
}) {
  return (
    <InputLabelStyle inputWidth={inputWidth} inputHeight={inputHeight} gap={gap}>
      <label htmlFor="input">{labelName}</label>
      {
        required === 'true'
          ? <input type={inputType} id="input" placeholder={placeholderName} required />
          : <input type={inputType} id="input" placeholder={placeholderName} />
      }
    </InputLabelStyle>
  );
}
