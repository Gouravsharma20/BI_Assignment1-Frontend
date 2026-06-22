import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <nav className="navbar bg-light border-bottom px-4 py-2">
            <a className="navbar-brand fw-bold" href="/"
               style={{
                   color: '#e8523a',
                   fontFamily: 'cursive',
                   fontSize: '2rem'
               }}>
                meetup
            </a>

            <div className="d-flex">
                <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted">
                        🔍
                    </span>
                    <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search by title and t..."
                        style={{outline: 'none', boxShadow: 'none'}}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header