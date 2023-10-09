import event from "../../src/assets/event.jpg"

const Banner = () => {
    return (


<div className="hero min-h-screen bg-stone-600" style={{backgroundImage: {event}}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Social Events</h1>
      <p className='text-center font-extrabold text-2xl p-5'>This a event manage management  page. <br></br>We manage Weddings, Birthday Parties, Anniversaries,<br></br>Engagement Parties, Retirement Parties, Baby shower, etc.</p>
      <button className="btn btn-primary">View More</button>
    </div>
  </div>
</div>

        
        
    );
};

export default Banner;