import Input from './Input'

export default function Form({userInput, formAction, onSearch}) {


    return (
        <form action={formAction}>
            <Input id={'search'} text={userInput} onSearch={onSearch}  isFocused>
                <strong>Search: </strong>
            </Input>
        </form>
    )
}