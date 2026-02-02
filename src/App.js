import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

const HUES = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']
const LUMINOSITY = ['bright', 'light', 'dark']

export default function App() {
  const [color, setColor] = useState(null);

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
      {color && (<div style={{ marginBottom: '1rem' }}>
        {'Generated Color: '}
        <div style={{ display: 'inline-block', lineHeight: 1.5, backgroundColor: `${color}`, padding: '0 0.4rem' }}>
          <span style={{ filter: 'invert(1)' }}>{`background: ${color}, hex: ${color}`}</span>
        </div>
      </div>)}
      <InputWrapper>
        <label htmlFor="hue">hue: </label>
        <ColorSelect id='hue' name='hue' type="text">
          {HUES.map(hue => (<option key={hue} value={hue}>{hue}</option>))}
        </ColorSelect>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="luminosity">luminosity: </label>
        <ColorSelect id='luminosity' name='luminosity' type="text">
          {LUMINOSITY.map(luminosity => (<option key={luminosity} value={luminosity}>{luminosity}</option>))}
        </ColorSelect>
      </InputWrapper>
      <Button type='submit'>Generate</Button>
    </ColorWrapper>
  );
}

const ColorWrapper = styled.form`
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 10rem;
  max-width: 40rem;
  font-size: 1%.2;
  padding-right: 1rem;
  padding-left: 1rem;
`

const InputWrapper = styled.fieldset`
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin-bottom: 1.5rem;

  label {
    cursor: pointer;
    font-weight: 500;
  }
`

const ColorSelect = styled.select`
	box-sizing: border-box;
  width: 100%;
	display: inline-flex;
	font-size: 1rem;
  font-weight: 500;
  padding: 0 10px;
  height: 2.3rem;
  line-height: 1;
  border: 1px solid #777;
  border-radius: 4px;
  margin-top: 0.5rem;
`

const Button = styled.button`
  all: unset;
	box-sizing: border-box;
  display: block;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
  height: 2.3rem;
  width: 100%;
  background-color: white;
  border: 1px solid #777;
  cursor: pointer;
  margin-top: 1.8rem;
  text-align: center;
`