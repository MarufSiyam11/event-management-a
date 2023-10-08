import location from "../assets/location.jpg"
import email from "../assets/email.png"
import phone from "../assets/phone.jpg"
import fax from "../assets/fax.jpg"
const Contact = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center p-10">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="card  w-56 bg-white shadow-xl">
                    <figure><img className="w-36 " src={location} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Our Main Office</h2>
                        <p>Address : DeMar Exclusive Residencies, Triq Caravaggio, Ħal Għargħur, GHR 1602
                            Malta</p>

                    </div>
                </div>
                <div className="card  w-56 bg-white shadow-xl">
                    <figure><img className="w-36 " src={phone} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Phone Number</h2>
                        <p>234-4040-9099</p>
                        <p>834-2380-9099 (Toll free)</p>

                    </div>
                </div>
                <div className="card  w-60 bg-white shadow-xl">
                    <figure><img className="w-36 " src={email} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Email</h2>
                        <p>event.bd@gmail.com</p>

                    </div>
                </div>
                <div className="card  w-56 bg-white shadow-xl">
                    <figure><img className="w-36 " src={fax} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fax</h2>
                        <p>1-527-645-6378</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;