// import { useState } from 'react'
// import './App.css'
// import axios from "axios"

// function App() {


//   const [values, setValues] = useState({
//     name: "", 
//     number:"", 
//     state:"", 
//     city:"", 
//     address:"", 
//     message:""
//   });

//   const handleChange = (e) => {
//     setValues({
//         ...values, 
//         [e.target.name]: e.target.value
//     });
// };

// const submit = async (e) => {
//   e.preventDefault();
//   if (values.name.trim() === "" || values.number.trim() === "" 
//   || values.address.trim() === "" || values.state.trim() === " " ||
//   values.city.trim() === " " || values.message.trim() === " ") {
//     alert("All fields are required");
//   } else {
//     await axios.post("http:1000/api/con/post",values).then((res)=>{
//       console.log(res);
      
//     });
//   }
// };

// const clearForm = () => {
//   setValues({
//     name: "", 
//     number: "", 
//     state: "", 
//     city: "", 
//     address: "", 
//     message: ""
//   });
// };

//   return (
//     <>
    
//      <div className='main'>
//         <div className='card-contact'>
//           <h1>Contact-Form</h1>
//           <div className='c-form'>
//             <div>
//               <h5>Enter Your Name</h5>
//               <input type="text" 
//               placeholder='Enter Yor Name' 
//               name='name' value={values.name} 
//               onChange={handleChange} required/>
//             </div>
//             <div>
//               <h5>Enter Your Phone Number</h5>
//               <input type="number" 
//               placeholder='Enter Yor Phone Number' 
//               name='number' value={values.number} required 
//               onChange={handleChange}/>
//             </div>

//             <div className='data'>
//               <div><h5>State</h5>
//               <input id='impdata' type="text" 
//               name='state' placeholder='Enter Your State' 
//               value={values.state} required onChange={handleChange} /></div>
//               <div><h5>city</h5>
//               <input id='impdata' type="text" 
//               name='city' placeholder='Enter Your City' 
//               value={values.city} required onChange={handleChange} /></div>
//             </div>
//             <div>

//               <h5>Address</h5>
//               <textarea placeholder='Enter Yor Adress' 
//               value={values.address} name='address' required 
//               onChange={handleChange} />
//             </div>
//             <div>
//               <h5>Enter Your Message</h5>
//               <textarea placeholder='Enter Yor Message' 
//               value={values.message} name='message' required 
//               onChange={handleChange} />
//             </div>
//           </div>
//           <div className='btn'>
//             <button type='button' onClick={submit} className='btn btn-primary'>Save</button>
//             <button type='button' onClick={clearForm} className='btn btn-danger'>Clear</button>
//           </div>
//         </div>
//      </div>
   
//     </>
//   )
// }

// export default App;

import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [values, setValues] = useState({
    name: '',
    number: '',
    state: '',
    city: '',
    address: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // New state for success message

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (
      values.name.trim() === '' ||
      values.number.trim() === '' ||
      values.address.trim() === '' ||
      values.state.trim() === '' ||
      values.city.trim() === '' ||
      values.message.trim() === ''
    ) {
      alert('All fields are required');
    } else {
      try {
        const res = await axios.post('http://localhost:1000/api/con/post', values);
        console.log(res);

        // Clear the form
        clearForm();

        // Show success message
        setFormSubmitted(true);

        // Hide the success message after 3 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error('Form submission failed:', error);
      }
    }
  };

  const clearForm = () => {
    setValues({
      name: '',
      number: '',
      state: '',
      city: '',
      address: '',
      message: ''
    });
  };

  return (
    <>
      <div className='main'>
        <div className='card-contact'>
          <h1>Contact Form</h1>
          <div className='c-form'>
            {formSubmitted && (
              <div className="success-message">
                Form submitted successfully!
              </div>
            )} {/* Success message */}

            <div>
              <h5>Enter Your Name</h5>
              <input
                type='text'
                placeholder='Enter Your Name'
                name='name'
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <h5>Enter Your Phone Number</h5>
              <input
                type='number'
                placeholder='Enter Your Phone Number'
                name='number'
                value={values.number}
                required
                onChange={handleChange}
              />
            </div>

            <div className='data'>
              <div>
                <h5>State</h5>
                <input
                  id='impdata'
                  type='text'
                  name='state'
                  placeholder='Enter Your State'
                  value={values.state}
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <h5>City</h5>
                <input
                  id='impdata'
                  type='text'
                  name='city'
                  placeholder='Enter Your City'
                  value={values.city}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <h5>Address</h5>
              <textarea
                placeholder='Enter Your Address'
                value={values.address}
                name='address'
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <h5>Enter Your Message</h5>
              <textarea
                placeholder='Enter Your Message'
                value={values.message}
                name='message'
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='btn'>
            <button type='submit' onClick={submit} className='btn btn-primary'>
              Save
            </button>
            <button type='button' onClick={clearForm} className='btn btn-danger'>
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


