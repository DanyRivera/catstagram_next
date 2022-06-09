import Image from "next/image";
import Link from "next/link";

const Feed = ({ breeds }) => {

    const breedsArr = breeds.filter(breed => breed.image !== undefined && !Object.keys(breed.image).length == 0);

    return (
        <main className="contenedor pb-20">
            <h2 className="text-center text-4xl md:mb-10 md:text-5xl">Your Feed</h2>

            <div className="text-center mt-10 md:grid md:grid-cols-4 md:gap-5">
                {breedsArr.map(breed => (
                    <Link key={breed.id} href={`/breeds/${breed.name}`}>
                        <div className="cursor-pointer mb-8 md:mb-0">
                            <Image className="rounded-md" width={300} height={200} src={breed.image.url} alt={`${breed.name} Image`} />
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Feed