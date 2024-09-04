
// import { useState } from 'react';
// import './ContactForm.css'

// function ContactForm() {
//     const [formData, setFormData] = useState({
//       name:' ',
//       email: ' ',
//       phone: ' ',
//       message:' '
//     });

//     const handleChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//       });
//     };

//     const handleSubmit= (e) => {
//       e.preventDefault();
//       console.log('Form data:', formData);
      
//     }

//   return (
//     <div className='cform'>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor='name'>Name:</label>
//           <input type="text"
//           id="name" name="name" 
//           value={formData.name} onChange={handleChange}
//           required />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//             <input type="email" id='email' name='email'
//             value={formData.email} onChange={handleChange}
//             required />
//         </div>

//         <div>
//           <label htmlFor="phone">phone</label>
//             <input type="phone" id='phone' name='phone'
//             value={formData.phone} onChange={handleChange}
//             required />
//         </div>
//         <div>
//           <label htmlFor="message">Message</label>
//           <textarea  name="message" id="message" value={formData.message}
//             onChange={handleChange}>
//           </textarea>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default ContactForm



// import { useState } from 'react';
// import './ContactForm.css';

// function ContactForm() {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       phone: '',
//       message: ''
//     });

//     const handleChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//       });
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
      
//       // Send formData to the backend
//       fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         alert('Message sent successfully!');
//         // Clear the form after successful submission
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           message: ''
//         });
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         alert('Failed to send message.');
//       });
//     };

//     const handleClear = () => {
//       // Clear the form fields
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//       });
//     };

//     return (
//       <div className='cform'>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor='name'>Name:</label>
//             <input type="text"
//             id="name" name="name" 
//             value={formData.name} onChange={handleChange}
//             required />
//           </div>

//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id='email' name='email'
//             value={formData.email} onChange={handleChange}
//             required />
//           </div>

//           <div>
//             <label htmlFor="phone">Phone</label>
//             <input type="tel" id='phone' name='phone'
//             value={formData.phone} onChange={handleChange}
//             required />
//           </div>

//           <div>
//             <label htmlFor="message">Message</label>
//             <textarea  name="message" id="message" value={formData.message}
//               onChange={handleChange}>
//             </textarea>
//           </div>

//           <div className="buttons">
//             <button type="submit">Submit</button>
//             <button type="button" onClick={handleClear}>Clear</button>
//           </div>
//         </form>
//       </div>
//     );
// }

// export default ContactForm;


import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Create a FormData object to include text data and file data
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      if (file) {
        formDataToSend.append('file', file);
      }

      // Send the FormData object to the backend
      fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
        // Clear the form and file input after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setFile(null);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message.');
      });
    };

    const handleClear = () => {
      // Clear the form fields and file input
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setFile(null);
    };

    return (
      <div className='cform'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type="text"
            id="name" name="name" 
            value={formData.name} onChange={handleChange}
            required />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email'
            value={formData.email} onChange={handleChange}
            required />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id='phone' name='phone'
            value={formData.phone} onChange={handleChange}
            required />
          </div>

          <div>
            <label htmlFor="file">Upload File (Image, PDF, Doc):</label>
            <input type="file" id="file" name="file" onChange={handleFileChange} accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} />
          </div>

          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
          </div>
        </form>
      </div>
    );
}

export default ContactForm;
