import React from 'react'

function Home() {
  return (
    <div>
        <div>
        <div className="nav">
            <div className="logo n">
                <h1>facebook</h1>
            </div>

            <div className="rightt">
            <div className="n email">
                <label htmlFor="email">Email or Phone</label><br />
                <input type="text" name='email'/>
            </div>

            <div className="n password">
                
            <label htmlFor="password">password</label><br />
                <input type="text" name='password'/>
                <p className='p'>Forgot account?</p>
            </div>

            <div className="n login">
                    <button className='btn' type='submit'>Log In</button>
            </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Home