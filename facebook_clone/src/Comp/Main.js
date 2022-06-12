import React from 'react'


function Main() {
  return (
   <div>
    <div className="main">
        <div className="left">

            <div className="caption">
                <h1 className="cap">Connect with the friends and the <br /> World around you on Facebook.</h1>
            </div>

            <div className="p1">
                <p className="p11"><span>see photos and updates </span>from friends in News Feed.</p>
            </div>

            <div className="p2">
            <p className="p22"><span>Share whts new </span>in your life on your Timelne.</p>
            </div>

            <div className="p3">
            <p className="p33"><span>Find more </span>of what you are looking for with Facebook search.</p>
            </div>

        </div>

        <div className="right">

        <div className="from">
            <div className="sign">
                <h1 className="signup">
                    Sign Up
                </h1>
                <p className="sdata">its free and alway's will be.</p>


            </div>

            <div className="name">
                <input type="text" placeholder='First Name'/> <input placeholder='Last Name' type="text" />
            </div>

            <div className="emaill">
            <input type="text" placeholder='Mobile Number or Email'/>
            </div>

            <div className="pass">
            <input type="text" placeholder='New Password'/>
            </div>

            <div className="bday">

                <div className="dd">
                <label htmlFor="brday">Birthday</label><br />

                <select className='dt' name="month" id="m">
                    <option value="jan">jan</option>
                    <option value="feb">feb</option>
                    <option value="mar">mar</option>
                    <option value="jan">apr</option>
                    <option value="feb">may</option>
                    <option value="mar">jun</option>
                    <option value="jan">jul</option>
                    <option value="feb">aug</option>
                    <option value="mar">sep</option>
                    <option value="jan">oct</option>
                    <option value="feb">nov</option>
                    <option value="mar">dec</option>
                </select>
                <select className='dt' name="day" id="d">
                    <option value="jan">1</option>
                    <option value="feb">2</option>
                    <option value="mar">3</option>
                    <option value="jan">4</option>
                    <option value="feb">5</option>
                    <option value="mar">6</option>
                    <option value="jan">7</option>
                    <option value="feb">8</option>
                    <option value="mar">9</option>
                    <option value="mar">10</option>
                    <option value="mar">11</option>
                    <option value="feb">12</option>
                    <option value="mar">13</option>
                    <option value="jan">14</option>
                    <option value="feb">15</option>
                    <option value="mar">16</option>
                    <option value="mar">17</option>
                    <option value="mar">18</option>
                </select>
                <select className='dt' name="year" id="y">
                    <option value="jan">2000</option>
                    <option value="feb">2001</option>
                    <option value="mar">2002</option>
                    <option value="jan">2003</option>
                    <option value="feb">2004</option>
                    <option value="mar">2005</option>
                    <option value="jan">2006</option>
                    <option value="feb">2007</option>
                    <option value="mar">2008</option>
                </select>
                </div>
                <div className="bdata">
                <span className="dtdata">Why do i need to provide my <br /> birday?</span>
                </div>
                

            </div>

            <div className="gender">
            <input name='Female' className='radio' type="radio" value='male' /> 
            <label htmlFor="Female">Female</label>
            
            <input type="radio" className='radio' name='Male' value='Female'/> 
            <label htmlFor="Male">Male</label>
           
            
            

            </div>

            <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. quas aperiam hic officia aut pariatur similique aspernatur, repudiandae sit nam placeat quaerat? Sapiente natus voluptatum sunt adipisci?
            </div>

            <div className="submitt">

                <button className="btnn">Create Account</button>


            </div>
        </div>

        </div>




    </div>



   </div>
  )
}

export default Main