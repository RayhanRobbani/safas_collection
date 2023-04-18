export default function TextInput({ id, title, errors, ...props }) {
    return (
        <>
            <div className="form-group row">
                <label htmlFor={id} className="col-sm-3 col-form-label">{title}</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" id={id} {...props} placeholder={title} />
                    { errors  && <div className="text-danger">{errors}</div>}
                </div>
            </div>
        </>
    );
}
