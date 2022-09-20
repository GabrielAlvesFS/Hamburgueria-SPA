import { InputLabelStyle } from './style';

export function InputLabel({
  labelName, placeholderName, inputWidth, inputHeight, inputType, required, gap, value, onChange,
}) {
  return (
    <InputLabelStyle inputWidth={inputWidth} inputHeight={inputHeight} gap={gap}>
      <label htmlFor="input">{labelName}</label>
      {
        required === 'true'
          ? <input onChange={onChange} value={value} type={inputType} id="input" placeholder={placeholderName} required />
          : <input onChange={onChange} value={value} type={inputType} id="input" placeholder={placeholderName} />
      }
    </InputLabelStyle>
  );
}
