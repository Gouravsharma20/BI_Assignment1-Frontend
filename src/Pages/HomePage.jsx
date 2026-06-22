import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

const HomePage = () => {
    const [events,setEvents] = useState([])
    const [selectedType,setSelectedType] = useState("")

    useEffect(()=>{
        const fetchEvents = async () => {

          let url = "https://bi-assignment1-xi.vercel.app/events"

          if (selectedType) {
            url = `https://bi-assignment1-xi.vercel.app/events/eventType/${selectedType}`
          }
          const response = await fetch(url)
          const data = await response.json()
          setEvents(selectedType ? data.foundevent : data.EventsList)
        }
        fetchEvents()
    },[selectedType])

    // const filteredEvents = selectedType ? events.filter((event)=>(event.typeOfEvent === selectedType)):events

    return (
        <div className="bg-light text-dark">
          <div className="d-flex justify-content-between align-items-center mb-4">

            <h1 className="fw-bold">Meetup Events</h1>
                <select
                    className="form-select w-auto"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="">Select Event Type</option>
                      <option value="offline Event">Offline Event</option>
                      <option value="online Event">Online Event</option>
                </select>
          </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {events.map((event)=>(
            <div className="col" key={event._id}>
    <div className="card h-100">

      <div className="position-relative">
                                <img src={event.eventImage} className="card-img-top" alt={event.eventTitle}/>
                                <span className="position-absolute top-0 start-0 m-2 badge bg-white text-dark shadow-sm">
                                    {event.typeOfEvent}
                                </span>
                            </div>
      <div className="card-body">
        <p className="card-text">{event.createdAt}</p>
        <h5 className="card-title">{event.eventTitle}</h5>
      </div>
    </div>
    </div>
          )
      )
    }
  </div>
  </div>
    )
}

export default HomePage