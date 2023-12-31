import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
    
    return (
        <div className='d-flex flex-column justify-content-center align-items-center border rounded-5' style={{width:'600px',height:'400px',boxShadow:'5px 5px 70px rgb(0, 0, 0)', margin: '150px 450px',gap: '20px'}}>
            <h2 className='text-center'>Welcome to Quiz App</h2>            
            <div className='d-flex justify-content-center align-items-center'>               
                <Link to={'/home'} style={{height:'80px',width:'200px',fontSize:'38px',textDecoration:'none',color:'white',border:'none'}} className='btn btn-dark fw-bold'>Start  <i class="fa-solid fa-brain"></i></Link>
            </div>          
        </div>
    )
}

export default LandingPage