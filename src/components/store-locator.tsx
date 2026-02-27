"use client";

import { useEffect, useRef } from "react";
import "@googlemaps/extended-component-library/store_locator.js";

const CONFIGURATION = {
    "locations": [
        {
            "title": "Synzephyr Technologies",
            "address1": "No:20,2nd Jeeva street, Sakthi Nagar",
            "address2": "Pollachi, Tamil Nadu, India",
            "coords": { "lat": 10.6503968, "lng": 76.9921574 },
            "placeId": "ChIJU8HM2DPq60gRk1Mpc5-Oh3c"
        }
    ],
    "mapOptions": {
        "center": { "lat": 38.0, "lng": -100.0 }, // This center seems odd for a single location in India, but sticking to provided config for now.
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 4,
        "zoomControl": true,
        "maxZoom": 17,
        "mapId": ""
    },
    "mapsApiKey": "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
    "capabilities": {
        "input": false,
        "autocomplete": false,
        "directions": false,
        "distanceMatrix": false,
        "details": false,
        "actions": false
    }
};

export function StoreLocator() {
    const locatorRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (locatorRef.current) {
            customElements.whenDefined('gmpx-store-locator').then(() => {
                if (locatorRef.current) {
                    (locatorRef.current as any).configureFromQuickBuilder(CONFIGURATION);
                }
            });
        }
    }, []);

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-border">
            {/* @ts-ignore */}
            <gmpx-store-locator
                ref={locatorRef}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}
