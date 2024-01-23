import React from 'react';
const Mf1App = React.lazy(() => import('mf1/App'));
const Mf2App = React.lazy(() => import('mf2/App')); 

const App =() => {
    

    return (
        <div className = 'toDoList'>            
            <h1> Hello World </h1>
            <button>Click me</button>
            <Mf1App/>
            <Mf2App/>
            
        </div>
    )
}

export default App;