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
            setBrainLinkConnected(BrainLink.isConnected());
        };

        window.addEventListener('brainLinkConnectedChange', handleConnectionChange);

        return () => {
            window.removeEventListener('brainLinkConnectedChange', handleConnectionChange);
        };
    }, []);

    return (
        <button style={{
                backgroundColor: brainLinkConnected ? "#10B981" : "#6B7280",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                borderRadius: "0.375rem",
                fontWeight: 800,
                color: "#ffffff",
            }}
            onClick={connectBrainLink}
        >
            BrainLink connect
        </button>
    );
}
