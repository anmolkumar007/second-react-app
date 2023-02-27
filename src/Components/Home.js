import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <button className="btn btn-primary"><Link to='/login' style={{color:'white'}}>Login</Link></button>
        </div>
    )
}

export default Home;