import React, { useState, useEffect } from 'react';

export function OfferEndTimer({ endDate, setTimeLeft }) {
    useEffect(() => {
        const targetDate = new Date(endDate.split('-').reverse().join('-'));

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                }
                )
                // setTimeLeft(`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`);
            } else {
                setTimeLeft("Offer ended");
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [endDate, setTimeLeft]);
}
