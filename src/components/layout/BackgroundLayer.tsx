import { useEffect, useState } from "react";

const BackgroundLayer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };



        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const ifDark = document.documentElement.classList.contains("dark");
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">

            {/* Grid */}
            <div className="absolute inset-0 bg-grid opacity-[0.1] animate-grid-drift" />

            {/* Ambient Light (Light Theme Only) */}
            {!ifDark && (
                <div
                    className="absolute inset-0 transition-all duration-200"
                    style={{
                        background: `radial-gradient(
              600px circle at ${position.x}px ${position.y}px,
              rgba(59, 130, 246, 0.1),
              transparent 80%
            )`,
                    }}
                />
            )}
        </div>
    );
};

export default BackgroundLayer;
