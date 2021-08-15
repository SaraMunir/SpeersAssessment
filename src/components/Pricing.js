import React from 'react'

function Pricing(props) {
    return (
        <div className="height100 pricingSect" ref={props.tryNow}>
            <div className="wrapper">
                <div className="text-left mx-auto">
                    <h2>Pricing</h2>
                    <p>Test out our app today! Choose from thre subscription <br /> Based payment models. </p>

                </div>
                <div className="text-left
                row mx-auto justify-content-center">
                    <div className="planGroups col-4">
                        <div className="redFont">
                            <h4>Basic</h4>
                            <h3>monthly</h3>
                            <h2>$9</h2>
                        </div>
                        <ul className='listGroup'>
                            <li>♪ Very good</li>
                            <li>♪ Amazing</li>
                            <li>♪ Perfect job</li>
                            <li>♪ Love this</li>
                            <li>♪ It's so good</li>
                            <li>♪ 
                                Features
                            </li>
                        </ul>
                        <div className="pricingBtn redBckg">Select</div>
                    </div>
                    <div className="planGroups col-4">
                        <div className="yellowFont">
                            <h4 >Advanced</h4>
                            <h3>yearly</h3>
                            <h2>$99</h2>
                        </div>
                        <ul className='listGroup'>
                            <li>♪ Very very good</li>
                            <li>♪ Even Amazing</li>
                            <li>♪ Perfect job</li>
                            <li>♪ Love this more</li>
                            <li>♪ It's so so good</li>
                            <li>♪ More Features</li>
                        </ul>
                        <div className="pricingBtn yelBckg">Select</div>
                    </div>
                    <div className="planGroups col-4">
                        <div className="tealFont">
                            <h4>Pro</h4>
                            <h3>yearly</h3>
                            <h2>$120</h2>
                        </div>
                        <ul className='listGroup'>
                            <li>♪ Very very good</li>
                            <li>♪ Even Amazing</li>
                            <li>♪ Perfect job</li>
                            <li>♪ Love this more</li>
                            <li>♪ It's so so good</li>
                            <li>♪ More Features</li>
                        </ul>
                        <div className="pricingBtn tealBckg">Select</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pricing
