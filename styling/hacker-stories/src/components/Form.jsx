import styled from 'styled-components'

export default function Form({children, formAction}) {

    const StyledForm = styled.form`
        padding: 10px 0 20px 0;
        display: flex;
        align-items: baseline;
  `;
  

    return (
        <StyledForm className="form" action={formAction}>
            {children}
        </StyledForm>
    )
}