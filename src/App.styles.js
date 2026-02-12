import styled from '@emotion/styled';

export const ColorWrapper = styled.form`
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 10rem;
  max-width: 40rem;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const GeneratedColor = styled.div`
  display: inline-block;
  line-height: 1.5;
  background-color: var(--background-color);
  padding: 0 0.4rem;
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.fieldset`
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin-bottom: 1.5rem;

  label {
    cursor: pointer;
    font-weight: 500;
  }
`;

export const ColorSelect = styled.select`
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
`;

export const Button = styled.button`
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
`;
