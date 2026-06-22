import Header from "../Components/Header"

const DetailsPage = () => {
    return (
        (
        <>
        <Header/>
            <div className="container py-4">
            <div className="row">

                {/* LEFT SIDE */}
                <div className="col-md-8">
                    <h2 className="fw-bold">Marketing Seminar</h2>
                    <p className="text-muted">Marketed By:</p>
                    <p className="fw-bold">Host Name</p>

                    <img src="https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg" alt="event" 
                         className="img-fluid rounded mb-4" />

                    <h5 className="fw-bold">Details:</h5>
                    <p>Stay ahead of the game in the dynamic field of digital marketing by attending the Marketing Seminar organized by Marketing Experts. This offline seminar will be held on August 15th from 10:00 AM to 12:00 PM at Marketing City, situated at 789 Marketing Avenue, City. Join industry leaders Sarah Johnson, Marketing Manager, and Michael Brown, SEO Specialist, as they delve into the latest trends and strategies in digital marketing. The seminar is open to individuals aged 18 and above and requires a ticket priced at ₹3,000. The dress code for the event is smart casual.</p>

                    <h5 className="fw-bold">Additional Information:</h5>
                    <p><strong>Dress Code:</strong> Smart Casual</p>
                    <p><strong>Age Restrictions:</strong> 18 and above</p>

                    <h5 className="fw-bold">Event Tags:</h5>
                    <div className="d-flex gap-2">
                        <span className="badge rounded-pill text-white" style={{backgroundColor:'#e8523a'}}>marketing</span>
                        <span className="badge rounded-pill text-white" style={{backgroundColor:'#e8523a'}}>digital</span>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="col-md-4">
                    <div className="border rounded p-3 mb-3">
                        <p>📅 Tue Aug 15 2023 at 10:00 AM to<br/>Tue Aug 15 2023 at 12:00 PM</p>
                        <p>📍 Marketing City<br/>789 Marketing Avenue, City</p>
                        <p>₹ 3,000</p>
                    </div>

                    <h6 className="fw-bold">Speakers: (2)</h6>
                    <div className="d-flex gap-2 flex-wrap mb-3">
                        <div className="border rounded p-2 text-center" style={{width:'120px'}}>
                            <img src="https://picsum.photos/50/50?random=1" alt="speaker"
                                 className="rounded-circle mb-1"
                                 style={{width:'50px', height:'50px', objectFit:'cover'}}/>
                            <p className="mb-0 fw-bold small">Sarah Johnson</p>
                            <p className="mb-0 text-muted small">Marketing Manager</p>
                        </div>
                        <div className="border rounded p-2 text-center" style={{width:'120px'}}>
                            <img src="https://picsum.photos/50/50?random=2" alt="speaker"
                                 className="rounded-circle mb-1"
                                 style={{width:'50px', height:'50px', objectFit:'cover'}}/>
                            <p className="mb-0 fw-bold small">Michael Brown</p>
                            <p className="mb-0 text-muted small">SEO Specialist</p>
                        </div>
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