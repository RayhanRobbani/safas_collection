export default function Introduction({ title, description}) {
    return (
        <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
