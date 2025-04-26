import * as React from "react";

export default function Input({id, name, text, type = 'text', onSearch, isFocused ,children}) {
  
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused])
    
    return (
      <>
        <label htmlFor={id}>{children}</label>
        <input ref={inputRef} id={id}  value={text} name={name} onChange={onSearch} type={type} />
        <button type="submit" disabled={!text}>Search</button>
      </>
    )
  }