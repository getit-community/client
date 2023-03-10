import React, { useCallback, useState } from 'react';

const useInput = (
  initialValue: null | string = null,
): [
  string | null,
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
] => {
  const [value, setValue] = useState(initialValue);

  const onChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let inputValue = event.target.value;
      const regex = /\s/gi;

      const result = inputValue.replace(regex, '');
      setValue(result);
    },
    [],
  );

  return [value, onChangeValue];
};

export default useInput;
