import React, { useState } from 'react';
import './Style/TableBooking.css';

const TableBooking = () => {
    const [form, setForm] = useState({
        name: 'Rujikorn Iimtrakul',
        day: '',
        time: '',
        phone: '093-232-2332',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
        console.log(form);
    };

    return (
        <div className="table-booking-container">
            <div className="table-booking-form">
                <h2>Reserve a Table</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Day</label>
                        <input
                            type="date"
                            name="day"
                            value={form.day}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TableBooking;
