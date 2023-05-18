import React from 'react';
import CommonLayout from '../Layouts/CommonLayout';
import HomeBanner from '../Components/HomeBanner';
import FeatureSection from '../Components/Feature';

const Home = () => {
    // const value = useGlobalContext()
    // console.log(value)
    return (
        <>
        <HomeBanner />
        <FeatureSection />
        </>
    );
};

export default Home;