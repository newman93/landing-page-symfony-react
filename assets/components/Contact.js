import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <form className="row g-3">
                <h5 className="contact">Contact:</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="col-md-5 m2">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
                        </div>
                    </div>
                </div>
          </form>
        )
    }
}

export default Contact;