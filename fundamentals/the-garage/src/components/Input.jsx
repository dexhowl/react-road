export default function Input({id, name, text, type = 'text', onSearch, children}) {
    
    return (
      <>
        <label htmlFor={id}>{children}</label>
        <input id={id}  value={text} name={name} type={type}  onChange={onSearch} />
      </>
    )
  }