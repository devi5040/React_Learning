import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();

    const navigateHandler =()=>{
        navigate('/products')
    }
  return (
<>
<h1>My home page</h1>
<p>
    Go to <Link to='/products'>Products</Link> to view products</p>
    <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}

export default Home;
