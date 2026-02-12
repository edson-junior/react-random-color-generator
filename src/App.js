import randomColor from 'randomcolor';
import { useState } from 'react';
import {
  Button,
  ColorSelect,
  ColorWrapper,
  GeneratedColor,
  InputWrapper,
} from './App.styles';

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
const LUMINOSITIES = ['bright', 'light', 'dark'];

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
        <GeneratedColor style={{ '--background-color': color }}>
          {`Generated Color: ${color}`}
        </GeneratedColor>
      )}
      <InputWrapper>
        <label htmlFor="hue">hue: </label>
        <ColorSelect id="hue" name="hue">
          {HUES.map((hue) => (
            <option key={`hue-${hue}`} value={hue}>
              {hue}
            </option>
          ))}
        </ColorSelect>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="luminosity">luminosity: </label>
        <ColorSelect id="luminosity" name="luminosity">
          {LUMINOSITIES.map((luminosity) => (
            <option key={`luminosity-${luminosity}`} value={luminosity}>
              {luminosity}
            </option>
          ))}
        </ColorSelect>
      </InputWrapper>
      <Button>Generate</Button>
    </ColorWrapper>
  );
}
