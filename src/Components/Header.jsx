import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const Header = ({onSearchResult,onClear}) => {
    const [searchtitle,setSearchTitle] = useState("")

    const handleSearch = async()=>{
        const response = await fetch(`https://bi-assignment1-xi.vercel.app/events/title/${searchtitle}`)
        const data = await response.json()
        if(data.FoundEvent) {
            onSearchResult(data.FoundEvent)
        } else {
            alert("No data found")
        }
    }

    const handleClear = () => {
        setSearchTitle("")
        onClear()
    }


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
                        value={searchtitle}
                        onChange={(e)=>setSearchTitle(e.target.value)}
                        style={{outline: 'none', boxShadow: 'none'}}
                    />
                    {searchtitle && (<button className='btn text-white' style={{ backgroundColor: '#e8523a' }} onClick={handleSearch}>Submit</button>)}
                    {searchtitle && (<button className='btn btn-outline-secondary' onClick={handleClear}>Clear</button>)}
                </div>
            </div>
        </nav>
    )
}

export default Header