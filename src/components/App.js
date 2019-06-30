import React from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import DisplayTypeBlock from './DisplayTypeBlock';

const App = () => {
    return (
        <div>
            <Header title="React Movie Cards" />
            <DisplayTypeBlock />
            <div className="mt-5">
                <Movies />
            </div>
        </div>
    );
};

export default App;