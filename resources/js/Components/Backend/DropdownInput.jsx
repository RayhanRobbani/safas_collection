export default function DropdownInput({ id, title, errors, children, ...props }) {
    return (
        <>
            <div className="form-group row">
                <label htmlFor={id} className="col-sm-3 col-form-label">{title}</label>
                <div className=" col-sm-9">
                    <select className="form-control" id={id} {...props}>
                        {children}
                    </select>
                    {errors && <div className="text-danger">{errors}</div>}
                </div>
            </div>
        </>
    );
}
