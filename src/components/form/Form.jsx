import './form.css'
import formImg from '../../images/form-section.webp'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    // Convert the selectedDate to a formatted string
    const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : ''

    // Append the formatted date to the form data
    formData.append('selectedDate', formattedDate)

    const entries = [...formData.entries()]

    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'machiulewis@gmail.com',
      Password: '96430193E328A4EC6162077B4C25BE41426D',
      To: 'support@lewinskie.com',
      From: 'machiulewis@gmail.com',
      Subject: 'Booking',
      // Use <br> for line breaks in the email body
      Body: `Name: ${formData.get('name')}<br>Phone: ${formData.get(
        'phone'
      )}<br>Booking for: ${formData.get('program')}<br>Date: ${formattedDate} `,
    }).then((message) => alert(message))

    console.log(entries)
    e.currentTarget.reset()
  }

  return (
    <section className="form-section" id="contact">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-img-wrapper">
            <img src={formImg} />
          </div>
          <div className="form-text-section">
            <div className="form-heading">
              <p>CONTACT US</p>
              <h1>Fill the Form, Set a Date</h1>
            </div>
            <div className="form-area">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                />
                <input type="tel" name="phone" id="phone" placeholder="Phone" />
                <select id="program" name="program">
                  <option value="booking-for">Booking for? </option>
                  <option value="adult">Adult</option>
                  <option value="adolescent">Adolescent</option>
                  <option value="children">Children</option>
                  <option value="family">Family</option>
                </select>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Select date"
                  dateFormat="dd-MM-yyyy"
                  minDate={new Date()}
                  filterDate={(date) => date.getDay() !== 0}
                />
                <div className="btn-form-container">
                  <button type="submit" className="btn-light btn-two">
                    Book Online Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Form
