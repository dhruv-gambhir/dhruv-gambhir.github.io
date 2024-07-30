"use client";

import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

import { useEffect, useState, useRef } from "react";

import "./styles/scatter.css";

export default function Home() {
    const [positions, setPositions] = useState(
        Array.from({ length: 16 }, (_, index) => ({
            id: index,
            top: Math.random() * 100,
            left: Math.random() * 100,
            xSpeed: Math.random() * 0.5 * 0.5,
            ySpeed: Math.random() * 0.5 * 0.5,
        }))
    );

    const containerRef = useRef(null);

    useEffect(() => {
        const updatePositions = () => {
            setPositions((prevPositions) =>
                prevPositions.map((image) => {
                    let newTop = image.top + image.ySpeed;
                    let newLeft = image.left + image.xSpeed;

                    if (newTop < 0 || newTop > 100) image.ySpeed *= -1;
                    if (newLeft < 0 || newLeft > 100) image.xSpeed *= -1;

                    return {
                        ...image,
                        top: Math.max(0, Math.min(100, newTop)),
                        left: Math.max(0, Math.min(100, newLeft)),
                        xSpeed: image.xSpeed,
                        ySpeed: image.ySpeed,
                    };
                })
            );
        };

        const interval = setInterval(updatePositions, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex flex-col min-h-screen items-center justify-center scroll-y">
            <Navbar />
            <div className="h-16"></div>
            <section
                id="about"
                ref={containerRef}
                className="relative flex h-screen w-screen items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {positions.map((position, index) => (
                        <img
                            key={index}
                            src={`/badges/${position.id}.svg`}
                            className="absolute transition-transform duration-100 ease-in-out"
                            alt={`Background Image ${index}`}
                            style={{
                                top: `${position.top}%`,
                                left: `${position.left}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    ))}
                </div>
                <div className="flex flex-col text-black rounded bg-white text-center animate-halo h-1/2 w-5/6 items-center justify-center z-10">
                    <p className="text-5xl">Gambhir Dhruv</p>
                    <br />
                    <p className="text-xl">
                        Final Year Computer Science student at Nanyang
                        Technological university
                    </p>
                    <p>Graduating May 2025</p>
                </div>
                <h3></h3>
            </section>
            <div className="h-16 w-full bg-gradient-to-b from-white to-mylightblue" />
            <section
                id="work"
                className="flex flex-col h-screen bg-mylightblue w-screen py-8 items-center"
            >
                <div className="h-16 my-4"></div>
                <h1 className="flex border-2 border-white text-5xl h-16 w-2/6 rounded text-black items-center justify-center">
                    WORK EXPERIENCE
                </h1>
                <div className="flex flex-row">
                    <Work
                        name="CEVA Logistics"
                        image="/ceva.png"
                        text="Web Development Intern"
                    />
                    <Work
                        name="Temasek Laboratories"
                        image="/temasek.png"
                        text="Software Development Intern"
                    />
                    <Work
                        name="Busy Accounting Software"
                        image="/busy.png"
                        text="Backend Software Development Intern"
                    />
                </div>
            </section>
            <div class="h-16 w-full bg-gradient-to-b from-mylightblue to-mydarkblue" />
            <section
                id="projects"
                className="flex flex-col h-screen bg-mydarkblue w-screen py-8 items-center"
            >
                <div className="h-16 my-4"></div>
                <h1 className="flex border-2 border-white text-5xl h-16 w-2/6 rounded text-black items-center justify-center">
                    PROJECTS
                </h1>
            </section>
            <div class="h-16 w-full bg-gradient-to-b from-mydarkblue to-mypurple" />
            <section
                id="contact"
                className="flex flex-col h-screen bg-mypurple w-screen py-8 items-center"
            >
                <div className="h-16 my-4"></div>
                <h1 className="flex border-2 border-white text-5xl h-16 w-2/6 rounded text-black items-center justify-center">
                    CONTACT
                </h1>
            </section>
        </main>
    );
}
