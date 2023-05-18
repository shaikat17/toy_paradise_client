import React from 'react';
import CommonLayout from '../Layouts/CommonLayout';
import HomeBanner from '../Components/HomeBanner';
import FeatureSection from '../Components/Feature';
import { useGlobalContext } from '../context/AppAuthContext';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    const value = useGlobalContext()
    // console.log(value)
    return (
        <>
        <HomeBanner />
        <FeatureSection />
        <NewsLetter />
        </>
    );
};

export default Home;