import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-centerscroll-y">
            <Navbar />
            <div className="h-16 my-4"></div>
            <section
                id="about"
                className="flex h-screen w-screen items-center justify-center"
            >
                <div class="flex flex-col text-black rounded text-center animate-halo h-1/2 w-5/6 items-center justify-center">
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
            <section
                id="projects"
                className="flex flex-col h-screen bg-mydarkblue w-screen py-8 items-center"
            >
                <div className="h-16 my-4"></div>
                <h1 className="flex border-2 border-white text-5xl h-16 w-2/6 rounded text-black items-center justify-center">
                    PROJECTS
                </h1>
            </section>
            <section
                id="contact"
                className="flex flex-col h-screen bg-mypink w-screen py-8 items-center"
            >
                <div className="h-16 my-4"></div>
                <h1 className="flex border-2 border-white text-5xl h-16 w-2/6 rounded text-black items-center justify-center">
                    CONTACT
                </h1>
            </section>
        </main>
    );
}
