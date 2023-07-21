import Image from "next/image";
import Link from "next/link";

const Feed = ({ breeds }) => {

    return (
        <main className="contenedor pb-20">
            <h2 className="text-center text-4xl md:mb-10 md:text-5xl">Your Feed</h2>

            <div className="text-center mt-10 md:grid md:grid-cols-4 md:gap-5">
                {breeds.map(breed => (
                    <Link key={breed.id} href={`/breeds/${breed.name}`}>
                        <div className="cursor-pointer mb-8 md:mb-0">
                            <Image
                                className="rounded-md"
                                width={300}
                                height={200}
                                src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                alt={`${breed.name} Image`}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Feed