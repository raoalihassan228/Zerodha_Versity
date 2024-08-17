import React from 'react'

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer first always</h2>
                    <p className='text-muted'>That's why 3+ million clients trust zerodha with Rs. 3.5 crores worth of equity investments.</p>
                    <h2 className='fs-4'>No spams and gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, or "gammification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but the whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives with Nudge and kill Switch, we don't just facilitate transactions, but actively help you do better with money.</p>
                    
                </div>

                {/* Left */}
                <div className='col-6 mt-5'>
                    <img src='media/images/ecosystem.png' style={{width:"100%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5'  style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;