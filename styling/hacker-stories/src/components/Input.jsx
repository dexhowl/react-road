import * as React from "react";
import styled from 'styled-components'

export default function Input({id, name, text, type = 'text', onSearch, isFocused ,children}) {
  
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused])
  
  const StyledButton = styled.button`
    background: transparent;
    border: 1px solid #171212;
    padding: 5px;
    cursor: pointer;
    transition: all 0.1s ease-in;
`

  const StyledButtonLarge = styled(StyledButton)`
    padding: 10px;
  `;
  const StyledLabel = styled.label`
    border-top: 1px solid #171212;
    border-left: 1px solid #171212;
    padding-left: 5px;
    font-size: 24px;
  `;
  const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid#171212;
    background-color: transparent;
    font-size: 24px;
  `;
  
  
    
    return (
      <>
        <StyledLabel htmlFor={id}>{children}</StyledLabel>
        <StyledInput ref={inputRef} id={id} value={text} name={name} onChange={onSearch} type={type} />
        <StyledButtonLarge  type="submit" disabled={!text}>Search</StyledButtonLarge>
      </>
    )
  }