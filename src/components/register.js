export function Register() {
    return (
        <>
            <p className="text-center" style={{color:'white'}}>Ready to watch?Enter your email to create or restart your membership</p>
            <div className="input-group input-group-lg">
                <input type="email" className="form-control w-25"  style={{height:'100px;'}}/>
                <button className="btn btn-danger">
                    Get started
                    <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </>
    );
}
