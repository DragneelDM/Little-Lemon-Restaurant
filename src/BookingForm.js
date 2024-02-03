import React, { useState } from "react";
import './App.css';

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const bg = {
    Background:"url("+"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='45' height='45' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(121)'%3E%3Crect width='100%25' height='100%25' fill='rgba(72, 187, 120,1)'/%3E%3Cpath d='M14.5 14.5h11v11h-11z' fill='rgba(246, 224, 94,1)'/%3E%3Cpath d='M-10-10h60v60h-60zM14 14v12h12v-12z' fill='rgba(246, 224, 94,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E "+")",
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    const selectedDate = e.target.value; // Extract the selected date
    setDate(selectedDate);
    props.dispatch(selectedDate); // Pass only the selected date to dispatch
  };
  return (
    <header>
      <section>
        <form className="container d-flex justify-content-center">
          <fieldset
            className=" container d-flex justify-content-around Width100 bodybg"
            style={bg}
          >
            <div className="flex-row">
              <div>
                <label htmlFor="book-date">Choose Date:</label><br/>
                <input
                  className="ms-2"
                  id="book-date"
                  name="book-date"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  placeholder=""
                  title="date"
                  required
                />
              </div>

              {/* Time Selection */}
              <div className="mt-3">
                <label htmlFor="book-time">Choose Time:</label><br/>
                <select
                  className="ms-2"
                  id="book-time"
                  name="book-time"
                  value={times}
                  title="select"
                  onChange={(e) => setTimes(e.target.value)}
                >
                  <option value="">Select a Time</option>
                  {props.availableTimes.availableTimes.map((availableTimes) => {
                    return (
                      <option key={availableTimes}>{availableTimes}</option>
                    );
                  })}
                </select>
              </div>

              {/* Number of guests */}
              <div className="mt-3">
                <label htmlFor="book-guests">Number of Guests:</label><br/>
                <input
                  className="ms-2"
                  id="book-guests"
                  name="book-guests"
                  min="1"
                  value={guests}
                  placeholder=""
                  title="guests"
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
            </div>
            {/* Occastion Field */}
            <div className="flex-row">
              <div>
                <label htmlFor="book-occasion">Occasion:</label><br/>
                <select
                  className="ms-2"
                  id="book-occasion"
                  name="book-occasion"
                  key={occasion}
                  value={occasion}
                  title="select"
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="btn btn-secondary mt-5">
                <input
                  aria-label="On Click"
                  type="submit"
                  placeholder=""
                  title="submit"
                  value={"Make Your Reservation"}
                  onChange={(e) => handleSubmit(e)}
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
