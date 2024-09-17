// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [formData, setFormData] = useState({
//     textField: '',
//     checkbox: false,
//     radioOption: '',
//     selectOption: '',
//     textarea: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="App">
//       <h1>React Form Example</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Text Field:
//             <input
//               type="text"
//               name="textField"
//               value={formData.textField}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Checkbox:
//             <input
//               type="checkbox"
//               name="checkbox"
//               checked={formData.checkbox}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Radio Option 1:
//             <input
//               type="radio"
//               name="radioOption"
//               value="option1"
//               checked={formData.radioOption === 'option1'}
//               onChange={handleChange}PARENT_ROUTES?.AUTH,
//             />
//           </label>
//           <label>
//             Radio Option 2:
//             <input
//               type="radio"
//               name="radioOption"
//               value="option2"
//               checked={formData.radioOption === 'option2'}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Select:
//             <select
//               name="selectOption"
//               value={formData.selectOption}
//               onChange={handleChange}
//             >
//               <option value="">--Please choose an option--</option>
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               <option value="option3">Option 3</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Text Area:
//             <textarea
//               name="textarea"
//               value={formData.textarea}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
