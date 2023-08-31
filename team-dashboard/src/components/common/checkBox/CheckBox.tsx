import { Component } from 'solid-js';

export const CheckBox: Component<{ id: string }> = ({ id }) => {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for={id} class="sr-only">
        checkbox
      </label>
    </>
  );
};
