import React, { useState } from "react";
import "./omdb.css/Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name:'',
    email:'',
    phonenumber:'',
    help:'',
    enquiry:''
  });
  const [error, setError] = useState({});

  const submitform=(event)=>{
    setData({...data, [event.target.name]: event.target.value})
  }
  

  const validationform =()=>{
    let newErrors={}

    if(!data.name){
        newErrors.name= "Name is required*";
    }

    if(!data.email){
        newErrors.email= "email is required*";
    }
    if(!data.phonenumber){
        newErrors.phonenumber= "Phone is required*";
    }
    if(!data.help){
        newErrors.help= "required*";
    }
    if(!data.enquiry){
        newErrors.enquiry= "required*";
    }

    setError(newErrors)
    return Object.keys(newErrors).length === 0
  }
    const handlesubmit=(event)=>{
      event.preventDefault()
    if(validationform()){
      console.log('Form submitted successfully!', data);
        setData({name:'', email:'', phonenumber:'', help:'', enquiry:''})
        setError({})
    }

  }

  return (
    <React.Fragment>
      <div className="omdbcontact">
        <div className="contactcontent">
          <div className="contactcontent1">If you like what you see</div>
        <div style={{width:"300px"}}>
        </div>
          <div className="contactcontent2">let’s work together!</div>
          <div className="contactcontent3">
            Get in touch and we’ll get all your questions answered
          </div>
        </div>

        <form action="" className="allchildparent" onSubmit={handlesubmit}>
          <div className="contactdetails1">
            <div className="formcontent"> How can we help you</div>
            <div className="formcontent1">
              Reach out to us for all your Enquiries
            </div>
            <div className="cntactdetails">
              <label for="name">Name</label>
              <input
                type="e-mail"
                name="name"
                value={data.name}
                onChange={submitform}
                className="contactinput"
                id="name"
                placeholder="Enter name"
                style={{border: error.name? "2px solid red":"2px  solid #7857bb"}}
              />
              <p style={{color:"red"}}>{error.name}</p>
            </div>
            <div className="cntactdetails">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={submitform}
                className="contactinput"
                id="Email"
                placeholder="Enter E-mail"
                style={{border: error.email? "2px solid red":"2px  solid #7857bb"}}

              />
              {error.email && <p style={{color:"red"}}>{error.email}</p>}
              
            </div>
            <div className="cntactdetails">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="number"
                name="phonenumber"
                value={data.phonenumber}
                onChange={submitform}
                className="contactinput"
                id="phonenumber"
                placeholder="Enter phone number"
                style={{border: error.phonenumber? "2px solid red":"2px  solid #7857bb"}}
              />
              {error.phonenumber && <p style={{color:"red"}}>{error.phonenumber}</p>}
            </div>
            <div className="cntactdetails">
              <label htmlFor="help">What can we help with</label>
              <input
                type="text"
                name="help"
                value={data.help}
                onChange={submitform}
                className="contactinput"
                id="help"
                placeholder="What type of enquiry"
                style={{border: error.help? "2px solid red":"2px  solid #7857bb"}}
              />
              {error.help && <p style={{color:"red"}}>{error.help}</p>}
            </div>
            <div className="cntactdetails">
              <label htmlFor="enquiry">Enquiry</label>
              <input
                type="e-mail"
                name="Enquiry"
                value={data.enquiry}
                onChange={submitform}
                className="contactinput"
                id="enquiry"
                placeholder="Help us Know a littel about your query"
                style={{border: error.enquiry? "2px solid red":"2px  solid #7857bb"}}
              />
              {error.enquiry && <p style={{color:'red'}}>{error.enquiry}</p>}
            </div>
            <button className="sendbtn" type="submit">Send Enquiry</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
