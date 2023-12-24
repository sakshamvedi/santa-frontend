import React, { useState } from 'react'
import '../styles/myaddress.scss'
import { Link } from 'react-router-dom';

function Myaddress() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [wish, setWish] = useState('');
    const obj = { name, address, wish };
    async function sendWish() {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "username": obj.name,
            "number": obj.address,
            "homeAddress": obj.wish
        });

        let response = await fetch("https://my-santa-backends.onrender.com/login", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);

    }

    return (
        <div className="container">
            <div className="form-box">
                <h1 className='make-wish'>Write your Wish Son !🎅🎅</h1>
                <div className="form-data">

                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" className='name' onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <label>Address</label>
                    <input type="text" placeholder="Enter your address" className='address' onChange={(e) => {
                        setAddress(e.target.value)
                    }} />
                    <label>What do you want ..? </label>
                    <input type="text" placeholder="Enter your wish" className='wishbox' onChange={(e) => {
                        setWish(e.target.value)
                    }} />
                </div>
                <span>
                    <button className='btn' onClick={sendWish}>
                        <Link to="/myaddress">
                            Send My Wish
                        </Link>
                    </button>
                    <button className='btn'>
                        <Link to="/myaddress">
                            Already Raised A Wish
                        </Link>
                    </button>
                </span>
            </div>
        </div>

    )
}

export default Myaddress;