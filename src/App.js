import randomColor from 'randomcolor';
import { useState } from 'react';
import { Button, ColorSelect, ColorWrapper, InputWrapper } from './App.styles';

const HUES = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'monochrome',
];
const LUMINOSITY = ['bright', 'light', 'dark'];

export default function App() {
  const [color, setColor] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const hue = formData.get('hue');
    const luminosity = formData.get('luminosity');
    const newColor = randomColor({ hue, luminosity });

    setColor(newColor);
  }

  return (
    <ColorWrapper onSubmit={handleSubmit}>
      {color && (
        <div
          style={{
            display: 'inline-block',
            lineHeight: 1.5,
            backgroundColor: color,
            padding: '0 0.4rem',
            marginBottom: '1rem',
          }}
        >{`Generated Color: ${color}`}</div>
      )}
      <InputWrapper>
        <label htmlFor="hue">hue: </label>
        <ColorSelect id="hue" name="hue" type="text">
          {HUES.map((hue) => (
            <option key={`key-${hue}`} value={hue}>
              {hue}
            </option>
          ))}
        </ColorSelect>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="luminosity">luminosity: </label>
        <ColorSelect id="luminosity" name="luminosity" type="text">
          {LUMINOSITY.map((luminosity) => (
            <option key={`key-${luminosity}`} value={luminosity}>
              {luminosity}
            </option>
          ))}
        </ColorSelect>
      </InputWrapper>
      <Button type="submit">Generate</Button>
    </ColorWrapper>
  );
}
