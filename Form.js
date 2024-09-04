import React from 'react'
import './Form.css';
function Form() {
  return (
    <form className='Form' >
        <h1 className='msg'>Message Me</h1>
        <div>
            <input placeholder='Your Name' className='name' type='text'></input>
            <input placeholder='Email' className='name' type='email'></input>
            <input placeholder='Subject' className='name subject'></input>
            <textarea cols={10} rows={10} placeholder='Your Feedback' className='name'></textarea>
        </div>
        <button className='formSubmit'>Submit</button>
    </form>
  );
}

export default Form;