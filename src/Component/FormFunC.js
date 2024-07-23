import React, { useState } from 'react'

export default function FormFuncC() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const submitData = (event) => {
        console.log("Form is submited", formData);
        event.preventDefault();
        setFormData(
            {
                username: "",
                email: "",
                password: ""
            }
        )
    }
    return (
        <>
            <form class="form1" onSubmit={submitData}>
                <div>
                    <h2>Login Form Using Function Component</h2>
                    <label> Enter Username </label>
                    <input type="text" name="username" value={formData.username}
                        onChange={handleChange} />
                </div>
                <div>
                    <label> Enter Email </label>
                    <input type="email" name="email" value={formData.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <label> Enter Password </label>
                    <input type="password" name="password" value={formData.password}
                        onChange={handleChange} />
                </div>
                <div>
                    <button type="submit"> Register </button>
                </div>
            </form>
        </>
    )
}