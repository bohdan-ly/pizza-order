import React from 'react';

export function useLocalStorage(key, initialState) {
  const formattedInitValue = JSON.stringify(initialState);

  const [value, setValue] = React.useState(localStorage.getItem(key) ?? formattedInitValue);

  React.useEffect(() => {
    const onClear = (e) => {
      localStorage.clear();
      setValue(formattedInitValue);
      window.updateSum();
    };

    window.addEventListener('storage', onClear);

    return () => {
      window.removeEventListener('storage', onClear);
    };
  }, []);

  const updatedSetValue = React.useCallback(
    (newValue) => {
      const localValue = JSON.stringify(newValue);

      if (localValue === formattedInitValue || typeof newValue === 'undefined') {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, localValue);
      }
      setValue(localValue ?? formattedInitValue);
      window.updateSum();
    },
    [initialState, key],
  );

  return [JSON.parse(value), updatedSetValue];
}
