import React, { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Name:', name);
        console.log('Password:', password);
        console.log('Phone Number:', phoneNumber);
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input 
                        type="tel" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
