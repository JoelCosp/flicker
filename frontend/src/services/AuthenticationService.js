import axios from "axios";
import React from "react";

const createUser = async (formData) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/register', formData);
        console.log('Form data submitted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error submitting form data:', error);
        throw error;
    }
}

export default { createUser };