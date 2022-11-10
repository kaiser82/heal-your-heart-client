import React from 'react';

const SectionOne = () => {
    return (
        <div className='space-y-5'>
            <h2 className='text-4xl font-bold text-center pb-5'>Our Special Packages</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-purple-50'>
                {/* card 1 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://cogentnetwork.org/asset/foto_statis/membership.jpg" alt="img" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">Membership Package</h2>
                        <p>This package will give you special discount and privilege over others. </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://www.telegraph.co.uk/multimedia/archive/02271/Terminally_ill_fac_2271159b.jpg" alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Poor Patient Package</h2>
                        <p>This package specially for those who are so much in need for medical service for cannot effort it. </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://www.publichealth.med.miami.edu/_assets/images/divisions/health-services-research-and-policy/health_services_research_and_policy_division_480x320.png" alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Holiday Special Package</h2>
                        <p>On holydays all services have special discount and offers </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* section2 */}


            <div className='text-center py-5'>
                <div className="stats shadow w-full bg-purple-50">

                    <div className="stat place-items-center">
                        <div className="stat-title">Experience</div>
                        <div className="stat-value">25Y</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Services Taken</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title"> Registered Members</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SectionOne;