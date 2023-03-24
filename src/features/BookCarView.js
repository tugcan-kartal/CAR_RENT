import React from 'react'

const BookCarView = () => {
  return (
    <div>
        <div>Book a car</div>

        <div>


            <div className='flex'>

                <div>
                    <div>Select Your Car Type</div>
                    <div>
                        <select>
                            <option>Select your car type</option>
                            <option>Audi A1 S-Line</option>
                            <option>VW Golf 6</option>
                            <option>Toyota Camry</option>
                            <option>BMW 320 ModernLine</option>
                            <option>Mercedes-Benz GLK</option>
                            <option>VW Passat CC</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div>Pick-up</div>
                    <div>
                        <select>
                            <option>Select pick up location</option>
                            <option>Audi A1 S-Line</option>
                            <option>VW Golf 6</option>
                            <option>Toyota Camry</option>
                            <option>BMW 320 ModernLine</option>
                            <option>Mercedes-Benz GLK</option>
                            <option>VW Passat CC</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div>Drop-of</div>
                    <div>
                        <select>
                            <option>Select drop off location</option>
                            <option>Audi A1 S-Line</option>
                            <option>VW Golf 6</option>
                            <option>Toyota Camry</option>
                            <option>BMW 320 ModernLine</option>
                            <option>Mercedes-Benz GLK</option>
                            <option>VW Passat CC</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className='flex'>

                <div>
                    <div>Pick-up</div>
                    <div>
                        <input type="date"/>
                    </div>
                </div>

                <div>
                    <div>Drop-of</div>
                    <div>
                        <input type="date"/>
                    </div>
                </div>

                <div>
                    <div>Search</div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default BookCarView;