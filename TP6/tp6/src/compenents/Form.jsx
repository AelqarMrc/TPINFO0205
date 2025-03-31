

export default function Form({method, url, children}) {
    return(
    <form action={url} method={method}>
        {children}
    </form>
    )
}