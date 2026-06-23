# useBoolean

## Problem

Implement a custom React hook `useBoolean` that manages a boolean state and exposes convenient setter functions.

## Signature

```js
useBoolean(initialValue?: boolean): UseBooleanReturn
```

### Arguments

- `initialValue` _(boolean, optional)_ — initial value of the boolean state. Defaults to `false`.

### Returns

| Property   | Type         | Description                          |
|------------|--------------|--------------------------------------|
| `value`    | `boolean`    | The current boolean state            |
| `setTrue`  | `() => void` | Sets the boolean state to `true`     |
| `setFalse` | `() => void` | Sets the boolean state to `false`    |

## Examples

```jsx
function Modal() {
  const { value: isOpen, setTrue: open, setFalse: close } = useBoolean(false);

  return (
    <>
      <button onClick={open}>Open</button>
      {isOpen && <dialog onClose={close}>Content</dialog>}
    </>
  );
}
```

## Notes

- `setTrue` and `setFalse` are recreated on every render; wrap in `useCallback` if referential stability is required (e.g. passed as props or used in dependency arrays)
