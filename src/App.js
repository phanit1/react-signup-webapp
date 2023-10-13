import React, { useState } from 'react';
import "./App.css"

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    phoneNumber: ''
    // profilePicture: null
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formSubmitSuccess, setformSubmitSuccess] = useState(false);
  // const [image, setImage] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (formData.username === '') {
      errors.username = "Username is required";
    }
    if (formData.email === '') {
      errors.email = "Email Id is required";
    }
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (formData.password === '') {
      errors.password = "Password is required";
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/.test(formData.password)) {
      errors.password = 'Password should contain atleast one lowercase letter, one uppercase letter, one number and one special character and length must be more than 8';
    }
    if (formData.confirmPassword === '') {
      errors.confirmPassword = "Confirm Password is required";
    }
    else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (formData.firstName === '') {
      errors.firstName = "First Name is required";
    }
    else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      errors.firstName = 'First Name should contain only alphabets';
    }
    if (formData.lastName === '') {
      errors.lastName = "Last Name is required";
    }
    else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      errors.lastName = 'Last Name should contain only alphabets';
    }
    if (formData.gender === '') {
      errors.gender = "Gender is Required";
    }
    if (formData.dateOfBirth === '') {
      errors.dateOfBirth = 'Date of Birth is Required'
    }
    if (formData.phoneNumber === '') {
      errors.phoneNumber = "Phone Number is required";
    }
    else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone no. Phone number must be 10 digits.'
    }
    // if (!formData.profilePicture) {
    //   errors.profilePicture = 'Profile Picture is required';
    // }
    if (formData.streetAddress === '') {
      errors.streetAddress = 'Street Address is Required'
    }
    if (formData.city === '') {
      errors.city = "City name is required";
    }
    else if (!/^[A-Za-z\s]+$/.test(formData.city)) {
      errors.city = "City name should contain alphabets only";
    }
    if (formData.state === '' || !formData.state) {
      errors.state = 'State field is required';
    }
    else if (!/^[A-Za-z\s]+$/.test(formData.state)) {
      errors.state = "State name should contain alphabets only";
    }
    if (formData.postalCode === '' || !formData.postalCode) {
      errors.postalCode = 'PostalCode is required';
    }
    else if (!/^\d{6}$/.test(formData.postalCode)) {
      errors.postalCode = "Postal Code should only be six digits";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setImage(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //     setFormData({ ...formData, profilePicture: image })
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setformSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          streetAddress: '',
          city: '',
          state: '',
          postalCode: '',
          phoneNumber: ''
          // profilePicture: null,
        });
        setformSubmitSuccess(false);
      }, 10000);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>User SignUp App</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          {formErrors.username && <span style={{ color: 'red' }}>{formErrors.username}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}
        </div>

        <div>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
          {formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
          <button type="button" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
          {formErrors.confirmPassword && <span style={{ color: 'red' }}>{formErrors.confirmPassword}</span>}
        </div>

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          {formErrors.firstName && <span style={{ color: 'red' }}>{formErrors.firstName}</span>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
          {formErrors.lastName && <span style={{ color: 'red' }}>{formErrors.lastName}</span>}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              />
              Other
            </label>
          </div>
          {formErrors.gender && <span style={{ color: 'red' }}>{formErrors.gender}</span>}
        </div>

        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
          />
          {formErrors.dateOfBirth && <span style={{ color: 'red' }}>{formErrors.dateOfBirth}</span>}
        </div>

        <div>
          <label>Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
          />
          {formErrors.streetAddress && <span style={{ color: 'red' }}>{formErrors.streetAddress}</span>}
        </div>

        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          {formErrors.city && <span style={{ color: 'red' }}>{formErrors.city}</span>}
        </div>

        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          />
          {formErrors.state && <span style={{ color: 'red' }}>{formErrors.state}</span>}
        </div>

        <div>
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
          />
          {formErrors.postalCode && <span style={{ color: 'red' }}>{formErrors.postalCode}</span>}
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="form-group">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>
          {formErrors.phoneNumber && <span style={{ color: 'red' }}>{formErrors.phoneNumber}</span>}
        </div>

        {/* <div>
          <label>Profile Picture</label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .jfif"
            name="profilePicture"
            onChange={handleImageUpload}
          />
          {formErrors.profilePicture && <span style={{ color: 'red' }}>{formErrors.profilePicture}</span>}
        </div> */}
      <br></br>
        <div align="center">
          <button type="submit">Sign Up</button>
        </div>
      </form>

      {formSubmitSuccess && (
        <div className='container'>
          <div align="center">
            <h1>User Details</h1>
            {/* <img height="250px" width="250px" src={formData.profilePicture} alt="Uploaded" /> */}
            <h2>{formData.username}</h2>
            <h3>{formData.firstName}    {formData.lastName}</h3>
            <h3>{formData.email}</h3>
            <h3>{formData.gender}       {formData.dateOfBirth}</h3>
            <h3>{formData.streetAddress},      {formData.city},                   {formData.state},         {formData.postalCode}</h3>
            <h3>{formData.countryCode}{formData.phoneNumber}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;