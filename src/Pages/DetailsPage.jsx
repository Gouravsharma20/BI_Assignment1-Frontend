import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../Components/Header"

const DetailsPage = () => {

    

    const {id} =useParams()

    const [event,setEvent] = useState(null)

    useEffect(()=>{
        const fetchEvent = async () => {
            const response = await fetch(`https://bi-assignment1-xi.vercel.app/events/${id}`)
            const data = await response.json()
            setEvent(data.foundEventDetails)
        }
        fetchEvent()
    },[id])

    console.log(event)

    if (!event) return <p className="text-center mt-5">loading ...</p>

    
    

    


    return (
        (
        <>
        <Header/>
            <div className="container py-4">
            <div className="row">

                {/* LEFT SIDE */}
                <div className="col-md-8">
                    <h2 className="fw-bold">{event.eventTitle}</h2>
                    <p className="text-muted">Marketed By:</p>
                    <p className="fw-bold">{event.hostedBy}</p>

                    <img src={event.eventImage} alt="event" 
                         className="img-fluid rounded mb-4" />

                    <h5 className="fw-bold">Details:</h5>
                    <p>{event.modelDetails}</p>

                    <h5 className="fw-bold">Additional Information:</h5>
                    <p><strong>Dress Code:</strong>{event.dressCode}</p>
                    <p><strong>Age Restrictions:</strong>{event.ageRestrictions}</p>

                    <h5 className="fw-bold">Event Tags:</h5>
                    <div className="d-flex gap-2 flex-wrap">
                        {event.eventTags.map((tag) => (
                            <span key={tag} className="badge rounded-pill text-white" style={{backgroundColor:'#e8523a'}}>{tag}</span>))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="col-md-4">
                    <div className="border rounded p-3 mb-3">
                        <p>📅 {new Date(event.eventStartTime).toLocaleString()} to<br/>{new Date(event.eventEndTime).toLocaleString()}</p>
                        <p>📍 {event.marketingCity}<br/>{event.marketingAddress}</p>
                        <p>{event.marketingPrice}</p>
                    </div>

                    <h6 className="fw-bold">Speakers: ({event.speakers.length})</h6>
                    <div className="d-flex gap-2 flex-wrap mb-3">
                        {event.speakers.map((speakerData)=>{return(<div className="border rounded p-2 text-center" style={{width:'120px'}}>
                            <img src={speakerData.speakerimage} alt="speaker"
                                 className="rounded-circle mb-1"
                                 style={{width:'50px', height:'50px', objectFit:'cover'}}/>
                            <p className="mb-0 fw-bold small">{speakerData.speakerName}</p>
                            <p className="mb-0 text-muted small">{speakerData.speakerPosition}</p>
                        </div>)})}
                        
                    </div>

                    <button className="btn w-100 text-white fw-bold"
                            style={{backgroundColor:'#e8523a'}}>
                        RSVP
                    </button>
                </div>

            </div>
        </div>
        </>
        
    )
    )
}

export default DetailsPage