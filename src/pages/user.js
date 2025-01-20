import React, { useState } from 'react';

const MultiFieldForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // updating a specific field
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!formData.name || !formData.id) {
            setMessage("Please fill in all fields before submitting.");
            return;
    };
    setMessage(`Form submitted successfully! Name: ${formData.name}, ID: ${formData.id}`);
};

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                ID:
                <input
                    type="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
            {message && (
                <div 
                    style={{
                        marginTop: '15px',
                        padding: '10px',
                        backgroundColor: message.includes('successfully') ? '#d4edda' : '#f8d7da',
                        color: message.includes('successfully') ? '#155724' : '#721c24',
                        border: `1px solid ${message.includes('successfully') ? '#c3e6cb' : '#f5c6cb'}`,
                        borderRadius: '4px',
                    }}
                >
                    {message}
                </div>
            )}
        </form>
    );
};

export default MultiFieldForm;