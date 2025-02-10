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
            background: brainLinkConnected ? "linear-gradient(to right, #34D399 0%, #059669 100%)" : "linear-gradient(to right, #9CA3AF 0%, #6B7280 100%)",
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
            { !brainLinkConnected &&<span style={{ fontSize: "0.75rem", fontWeight: 500 }}>Connect your AI with</span> }
            <br />
            BrainLink
        </button>
    );
}
