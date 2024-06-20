import React, { useEffect } from 'react';

const TawkTo: React.FC = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/6674b21f9d7f358570d1cb33/1i0rtfink';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');

        // Insert script before the first script tag in the document
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
            firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
        }

        // Cleanup function to remove the script when the component unmounts
        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return null;
};

export default TawkTo;
