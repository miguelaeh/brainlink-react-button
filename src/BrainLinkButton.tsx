import * as BrainLink from "@brainlink/spa-sdk";
import React, { useEffect, useState } from "react";

export default function BrainLinkButton() {
    const [brainLinkConnected, setBrainLinkConnected] = useState<boolean>(false);

    const connectBrainLink = async () => {
        // The startCodeExchange redirects to the authorize endpoint which loses the state after the redirect,
        // but we do this because it could skip the start if brainlink is already connected
        await BrainLink.startCodeExchange();
        setBrainLinkConnected(BrainLink.isConnected());
    }

    useEffect(() => {
        const handleConnectionChange = () => {
            console.log("brainLinkConnectedChange");
            setBrainLinkConnected(BrainLink.isConnected());
        };

        window.addEventListener('brainLinkConnectedChange', handleConnectionChange);

        return () => {
            window.removeEventListener('brainLinkConnectedChange', handleConnectionChange);
        };
    }, []);

    return (
        <button className={`${brainLinkConnected ? "bg-green-500" : "bg-gray-500"} text-white px-4 py-2 rounded-md font-extrabold`} onClick={connectBrainLink}>
            BrainLink connect
        </button>
    );
}
