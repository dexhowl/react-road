
export default function Form({children, formAction, styles}) {


    return (
        <form className={styles.form} action={formAction}>
            {children}
        </form>
    )
}