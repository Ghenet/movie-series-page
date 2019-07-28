import React from 'react'

function Footer() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='footer p3 mt-4 text-center bg-dark text-light'>
                        Developed By: 
                        <span className='text-warning font-weight-normal'>
                            Ghenet Kibrom
                        </span>
                        , Using <i className='fab fa-react' /> React Js  &amp; Redux JS integrated with external movies data API.
                        <a href='http://www.omdbapi.com/' target='_blank'>OMDB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
