import React from 'react';
import tw from 'twin.macro';

const Label = tw.label`w-full flex flex-col`;
const Wording = tw.span`text-lg `;
const InputType = tw.input`py-3 px-5 rounded-md border border-violent-300`;

interface Props {
  wording: string;
  id: string;
  placeholder: string;
  type: string;
  onChange: any;
}
const Input = ({ wording, id, placeholder, onChange, type }: Props) => {
  return (
    <Label>
      <Wording>{wording}</Wording>
      <InputType
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </Label>
  );
};

export default Input;
