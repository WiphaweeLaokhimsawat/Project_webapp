import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // ใช้สำหรับดึงข้อมูลโต๊ะจาก state
import './Style/TableBooking.css';

const TableBooking = () => {
    const location = useLocation();
    const { table } = location.state || {}; // ดึงข้อมูลโต๊ะที่เลือกจาก state

    const [form, setForm] = useState({
        name: 'Rujikorn Iimtrakul',
        day: '',
        time: '',
        phone: '093-232-2332',
        table: table || 'No table selected' // เก็บข้อมูลโต๊ะที่เลือก
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
                        <label>Table</label>
                        <input
                            type="text"
                            name="table"
                            value={form.table}
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
