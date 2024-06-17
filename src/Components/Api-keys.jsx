import React from 'react'
import './omdb.css/Apikeys.css'

const Apikeys = () => {
  return (
    <React.Fragment>
            <div className='contactcontent'>
                <div className='contactcontent1'>Our API-KEYS</div>
                <div className='contactcontent2'>Generate API Key</div>
                <div className='contactcontent3'>FREE KEYS! The "open" API is finally open again!</div>
                </div>
    <div className='allchildparent'>
        <div className='apiparent'>
            <h2 className='devider'>API KEY</h2>
            <div className='emaildelays'>
                <strong>Email Delays!</strong>
                <p className='delays'>if your requested key doesn't show up within an hour, please contact me directly</p>
            </div>
            <div className='apikeycard'>
                <p className='devider1'>Generate API Key</p>
                <form action="">
                    <div className='apikeyform'>
                        <label htmlFor="">Account Type</label>
                        <div className='apiradio'>
                            <input type="radio" name="radio" id="radioinput" />
                            <label htmlFor="">Patreon</label>
                        </div>
                        <div className='apiradio'>
                            <input type="radio" name="radio" id="radioinput" />
                            <label htmlFor="">FREE! (1,000 daily limit)</label>
                        </div>
                       <div className='apiemil'>
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="apiinput" required placeholder='omdbclone@gmail.com'/>
                        <p>Enter the email address that you used with Patreon.</p>
                    </div>
                    <button className='apibtn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>


    </div>
    </React.Fragment>
  )
}

export default Apikeys