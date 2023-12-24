import React, { useEffect, useState } from 'react'
import '../styles/alllcards.scss'
import { Link } from 'react-router-dom';
function Allcards() {
    const [allcards, setAllcards] = useState([]);
    useEffect(() => {
        async function getAllCards() {


            let response = await fetch("https://my-santa-backends.onrender.com/showcards", {
                method: "GET",
            });

            let data = await response.text();
            console.log(data);

            setAllcards(() => JSON.parse(data));
            console.log(allcards);
        }
        getAllCards();
    }, [])

    return (
        <>
            <div className="container-allcards">
                <div className="main">
                    <div className="upper-tab">
                        <Link to="/">
                            I'm seeking to fulfill a wish.........
                        </Link>
                    </div>
                </div>
                <div className="box">
                    {
                        allcards.map((card) => {
                            return (
                                <div className="cards">
                                    <div className="name">
                                        Name 😊 : <span className="name-value">{card.username}</span>
                                    </div>
                                    <div className="address">
                                        Address 🟢: <span className="address-value">{card.number}</span>
                                    </div>
                                    <div className="wish">
                                        Wish 🤞: <span className="wish-value">{card.homeAddress}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Allcards;