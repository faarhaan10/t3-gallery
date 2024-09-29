import { SignedIn, SignedOut } from '@clerk/nextjs';
import React from 'react';
import MyGallery from '~/components/gallery/MyGallery'; 

const GallerPage = () => {
    return (
        <section> 
            <MyGallery />
            
        </section>
    );
};

export default GallerPage;