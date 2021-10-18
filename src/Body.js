import React from 'react';
import './Body.css';
import Table from './Table';

function Body() {
    return (
        <div className="seven">
         <h1 >Latest Posts</h1>
         <div style={{display:'flex',alignItems:'center'}}>
             <img  src="https://tse2.mm.bing.net/th?id=OIP.sugOD9EYvW5fGONqCQRVVAAAAA&pid=Api&P=0&w=300&h=300" style={{height:'20px',width:'20px'}}/>
             <h5 className="eight">Filter by category</h5>    
         </div >
         <div><button className="ten">All</button><button>Artificial Intelligence</button><button>Cloud Computing</button><button>DevOps</button><button>Programming Languages</button><button>Mobile Application Development</button><button>Programming Languages</button>
         <br></br>
         <button>Get a Job in Tech Company</button><button>Others</button></div>
         <Table/>
        </div>
    )
}
export default Body;