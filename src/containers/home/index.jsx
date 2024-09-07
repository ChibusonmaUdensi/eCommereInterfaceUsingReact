import React from 'react';
import TopNav from './TopNav';
import Hero from './Hero';
import NewArrival from './NewArrival';
import BrowseStyles from './BrowseStyles';
import FooterSect from './FooterSect';

function Home(){
    return(
        <div>
            <TopNav />
            <Hero />
            <NewArrival/>
            <BrowseStyles/>
            <FooterSect/>
        </div>
    )
}

export default Home;