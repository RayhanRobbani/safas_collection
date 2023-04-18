export default function ImageInput({ id, url, title, errors, ...props }) {
    return (
        <>
            <input type="file" accept="image/*" value={""} {...props} className="hide-upload-button" id={id} />
            <label htmlFor={id} className="col-md-6">
                {url == '' ? <div className="upload-button-label">{title}</div> : <img src={url} alt={id} className="col-sm-12" />}
                {errors && <div className="text-danger mt-1">{errors}</div>}
            </label>
        </>
    );
}
