
export default function Form({children, formAction}) {


    return (
        <form className="form" action={formAction}>
            {children}
        </form>
    )
}