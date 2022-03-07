function Contactus() {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Contact us</h2>
                            </div>
                            <form className="main_form">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Your name" type="text" name="Your Name" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Email" type="text" name="Email" />
                                    </div>
                                    <div className=" col-md-12">
                                        <input className="form-control" placeholder="Phone" type="text" name="Phone" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="textarea" placeholder="Message" defaultValue={""} />
                                    </div>
                                    <div className=" col-md-12">
                                        <button className="send">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactus;