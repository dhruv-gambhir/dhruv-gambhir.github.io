"use client";

import "../styles/custom.css";

export default function Navbar() {
    return (
        <main className="flex flex-row w-full h-16 fixed top-0 bg-mypurple justify-center items-center z-10">
            <nav className="px-4 mx-4 nav">
                <button
                    onClick={() =>
                        document
                            .getElementById("about")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-4 mx-4 bg-white rounded button"
                >
                    About
                </button>
                <button
                    onClick={() =>
                        document
                            .getElementById("work")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-4 mx-4 bg-white rounded button"
                >
                    Work
                </button>
                <button
                    onClick={() =>
                        document
                            .getElementById("projects")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-4 mx-4 bg-white rounded button"
                >
                    Projects
                </button>
                <button
                    onClick={() =>
                        document
                            .getElementById("contact")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-4 mx-4 bg-white rounded button"
                >
                    Contact
                </button>
            </nav>
        </main>
    );
}
