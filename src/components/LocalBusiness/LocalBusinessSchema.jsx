import Script from 'next/script';

const LocalBusinessSchema = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mahesh Carpets",
        "image": "https://www.maheshcarpets.com/images/our-story.jpg",
        "@id": "",
        "url": "https://www.maheshcarpets.com/",
        "telephone": "09918639000",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "90 D, JAGATPUR, G.T. ROAD",
            "addressLocality": "Varanasi",
            "postalCode": "221302",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.2743273,
            "longitude": 82.8721105
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:30",
            "closes": "18:00"
        }
    };

    return (
        <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default LocalBusinessSchema;
