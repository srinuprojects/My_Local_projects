export default function NetflixHeaderComponents() {
    return (
        <>
            <div className="d-flex justify-content-between p-3 m-3">
                <div>
                    <h2 className="text-danger">NETFLIX</h2>
                </div>

                <div className="d-flex">
                    <div className="me-2" style={{ width: '150px' }}>
                        <select className="form-select">
                            <option>Language</option>
                            <option>Telugu</option>
                            <option>Hindi</option>
                            <option>English</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-danger">SignIN</button>
                    </div>
                </div>
            </div>
        </>
    );
}
