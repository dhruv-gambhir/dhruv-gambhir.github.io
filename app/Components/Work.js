import Image from "next/image";

export default function Work({ name, image, text }) {
    const clicked = false;

    return (
        <main className="rounded bg-white m-4 p-4 w-3/6 h-3/6">
            {clicked ? <p>{text}</p> : <p></p>}
            <button>
                <Image src={image} width={100} height={100}></Image>
            </button>
        </main>
    );
}
