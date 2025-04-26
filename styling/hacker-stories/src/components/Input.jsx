import * as React from "react";

export default function Input({id, name, text, type = 'text', onSearch, isFocused ,children, styles}) {
  
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused])
    
    return (
      <>
        <label className={styles.label} htmlFor={id}>{children}</label>
        <input className={styles.input} ref={inputRef} id={id}  value={text} name={name} onChange={onSearch} type={type} />
        <button className={`${styles.btn} ${styles.btnLg}`} type="submit" disabled={!text}>Search</button>
      </>
    )
  }