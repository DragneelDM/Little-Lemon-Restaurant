import React, { useState } from 'react';

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasionf] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} 
                            type='date' required/>
                        </div>

                        {/* Time Selection */}
                        <div>
                            <label htmlFor='book-time'>
                                Choose Time:
                            </label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                                    {availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        {/* Number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guest' min='1' value={guests} onChange={(e) => setGuests(e.target.
                            value)}/>
                        </div>

                        {/* Occastion Field */}
                        <div>
                            
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;