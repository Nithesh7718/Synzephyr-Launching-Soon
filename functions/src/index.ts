import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import fetch from "node-fetch";

/**
 * Cloud Function to notify IndexNow (Bing/Yandex) about site updates.
 * Can be triggered via a simple HTTP POST/GET request after deployment.
 */
export const notifyIndexNow = onRequest({ cors: true }, async (request, response) => {
    const HOST = "synzephyrtechnologies.web.app";
    const KEY = "9e3a6c11f4d84c62b5d7e82b7c6c4493";
    const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

    // List of URLs to notify. 
    // In a production app, you might fetch these from your sitemap.xml
    const urls = [
        `https://${HOST}/`,
        `https://${HOST}/services`,
        `https://${HOST}/seo-services-pollachi`,
        `https://${HOST}/seo-services-coimbatore`,
        `https://${HOST}/digital-marketing-pollachi`,
        `https://${HOST}/digital-marketing-coimbatore`,
        `https://${HOST}/google-business-profile-setup-pollachi`,
        `https://${HOST}/graphic-design-services-pollachi`,
        `https://${HOST}/about`,
        `https://${HOST}/portfolio`,
        `https://${HOST}/blog`,
        `https://${HOST}/contact`,
        `https://${HOST}/connect`
    ];

    try {
        logger.info("Starting IndexNow notification...");

        const indexNowResponse = await fetch("https://www.bing.com/IndexNow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                host: HOST,
                key: KEY,
                keyLocation: KEY_LOCATION,
                urlList: urls
            })
        });

        if (indexNowResponse.ok) {
            logger.info("Successfully notified IndexNow.");
            response.status(200).send("IndexNow notification sent successfully.");
        } else {
            const errorText = await indexNowResponse.text();
            logger.error(`IndexNow API error: ${indexNowResponse.status}`, errorText);
            response.status(indexNowResponse.status).send(`Failed to notify IndexNow: ${errorText}`);
        }
    } catch (error) {
        logger.error("Error sending IndexNow notification", error);
        response.status(500).send("Internal Server Error during IndexNow notification.");
    }
});
