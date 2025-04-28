
export default function Form({children, formAction}) {


    return (
        <form action={formAction}>
            {children}
        </form>
    )
}