import React from 'react'
import './editProfile.scss'
import chooseTime from './components/chooseTime.js'
export default class editProfile extends React.Component{
  constructor(props){
    super(props)
    this.state={
        Day:'',
        Open:'',
        Close:''
    }
  }
  pushTime(event){
    event.preventDefault();
    console.log('Clicked ', event.target.value);
    console.log(event.target.Day);
    console.log(event.target.Open);
    console.log(event.target.Close);

    return;
  }
  render(){

    return(

<div className = 'Jumbo'>
  <div className='left'>
      <div className='imageContain'>
        <div className='image'>
        </div>
      </div>

    <div className="timeContain">
      <div className='time'>
        <div className='top'>
        </div>
    <div className='bot'>
        <form onSubmit={this.pushTime.bind(this)>
            <select id='Day'>
                  <option  value="MON">Monday</option>
                  <option  value="TUES">Teusday</option>
                  <option  value="WEDN">Wednesday</option>
                  <option  value="THUR">Thursday</option>
                  <option  value="FRID">Friday</option>
                  <option  value="SATU">Saturday</option>
                  <option  value="SUND">Sunday</option>
            </select>
            <chooseTime/>
            <chooseTime/>

          <button onClick={this.pushTime.bind(this)}>Add Hours</button>
      </form>
    </div>
  </div>
</div>
</div>


    <div className='right'>
      <div className='innerRight'>
              <p>Update Business Details</p>
              <p>Keep up to date with your community and update!</p>
              <div className='box'>
                <h4>Insert Name</h4>
                <input className='textBox'type='text' placeholder='Enter Name of company'/>
              </div>
              <div className='box'>
                <h4>Insert Address</h4>
                <input className='textBox'type='text' placeholder='Enter Street Address'/>
              </div>
              <div className='box'>
                <h4>Insert City</h4>
                <input className='textBox'type='text' placeholder='Enter City'/>
              </div>
      <div className='box'>
          <select>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
      </div>

                <div className='box'>
                  <h4>ZIP</h4>
                  <input className='textBox'type='text' placeholder='33133'/>
                </div>
                <div className='box'>
                  <h4>Phone</h4>
                  <input className='textBox'type='text' placeholder='(305)912-0125'/>
                </div>
                <div className='box'>
                  <h4>Website</h4>
                  <input className='textBox'type='text' placeholder='Enter website URL'/>
                </div>
                <div className='box'>
                  <h4>Insert type</h4>
                  <input className='textBox'type='text' placeholder='Enter type'/>
                </div>
      </div>
    </div>

</div>


    )}
