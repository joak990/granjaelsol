import { useEffect, useState } from 'react';
import '../styles/ChristmasSnow.css';

function ChristmasSnow() {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const generateSnowflakes = () => {
            const flakes = [];
            for (let i = 0; i < 50; i++) {
                flakes.push({
                    id: i,
                    left: Math.random() * 100,
                    delay: Math.random() * 5,
                    duration: 10 + Math.random() * 10,
                    size: 10 + Math.random() * 20,
                    opacity: 0.3 + Math.random() * 0.7,
                });
            }
            setSnowflakes(flakes);
        };

        generateSnowflakes();
    }, []);

    return (
        <div className="christmas-snow-container">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.left}%`,
                        animationDelay: `${flake.delay}s`,
                        animationDuration: `${flake.duration}s`,
                        fontSize: `${flake.size}px`,
                        opacity: flake.opacity,
                    }}
                >
                    ❄
                </div>
            ))}
        </div>
    );
}

export default ChristmasSnow;
