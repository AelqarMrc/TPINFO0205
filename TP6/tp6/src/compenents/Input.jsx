export default function Input({label, name, width, value, type, readonly, autofocus}){
    return(
        <>
            <label label={name} className="col-sm-2 col-form-label">{label}</label>
            <div className={"col-sm-"+width}>
                <input className="form-control" type={type} value={value} readOnly={readonly} autoFocus={autofocus} />
            </div>
        </>
    )
}