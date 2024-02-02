import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form className="container d-flex justify-content-center">
          <fieldset
            className=" container d-flex justify-content-around Width100"
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
