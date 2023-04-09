import './booking.css';

import React, { useState } from 'react';
import Datetime from 'react-datetime';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function Booking() {
    let sDate = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(sDate.getDate() + 1);
    const [startDate, setStartDate] = useState(sDate);
    const [endDate, setEndDate] = useState(tomorrow);
    return (
        <div className='booking-container' id='booking-section'>
            <h2>BOOKING</h2>
            <div className='container row'>
                <div className='col-md-3'><span className='small-label'>CHECK-IN:</span><Datetime className='date-picker-font' value={startDate} onChange={(date) => setStartDate(date)} timeFormat={false} closeOnSelect={ true }/></div>
                <div className='col-md-3'><span className='small-label'>CHECK-OUT:</span><Datetime value={endDate} onChange={(date) => setEndDate(date)} timeFormat={false} closeOnSelect={ true }/></div>
                <div className='col-md-1'><span className='small-label'>ROOMS:</span>
                    <DropdownButton id="rooms-dropdown" title="1 Room  " className="rooms-dropdown">
                        <Dropdown.Item>2 Rooms</Dropdown.Item>
                        <Dropdown.Item>3 Rooms</Dropdown.Item>
                        <Dropdown.Item>4 Rooms</Dropdown.Item>
                        <Dropdown.Item>5 Rooms</Dropdown.Item>
                    </DropdownButton></div>
                <div className='col-md-3 ms-5'><button className='btn btn-dark py-3 px-5 availability-btn' variant="dark">CHECK AVAILABILITY</button></div>
            </div>
        </div>
    );
}

export default Booking;
