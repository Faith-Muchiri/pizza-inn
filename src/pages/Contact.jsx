import React from 'react'

function Contact() {
  return (
    <>
      <div className="container ">
        <div className="row"></div>
        <div className="row">
          <form action="">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" placeholder="First Name" required/>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" required/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' required></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact