import Image from "next/image";
import Link from "next/link";

const Breed = ({ breed, breedImage }) => {

    const { child_friendly, origin, description, energy_level, intelligence, name, temperament, } = breed[0];
    const { url } = breedImage[0];

    // console.log(breed);
    // console.log(breedImage);

    return (
        <section className="contenedor">
            <div className="py-6 px-7 md:pt-10">
                <Link href="/">
                    <p className="font-bold text-xl cursor-pointer">Back</p>
                </Link>
            </div>

            <div className="md:mt-10 md:flex md:gap-5">
                <div>
                    <Image className="rounded-md" width={2500} height={1900} src={url} alt={`${name} Image`} />
                </div>
                <div className="px-2 mb-10 md:col-start-2 md:col-end-4">
                    <p className="my-3 text-3xl font-bold md:text-5xl md:m-0 md:mb-2">{name}</p>
                    <p className="text-xl mb-5 md:text-2xl">{description}</p>
                    <div>
                        <p className="mb-5 text-xl"><span className="font-bold">Friendly: </span>{child_friendly}</p>
                        <p className="mb-5 text-xl"><span className="font-bold">Origin: </span>{origin}</p>
                        <p className="mb-5 text-xl"><span className="font-bold">Energy Level: </span>{energy_level}</p>
                        <p className="mb-5 text-xl"><span className="font-bold">Intelligence: </span>{intelligence}</p>
                        <p className="mb-5 text-xl"><span className="font-bold">Temperament: </span>{temperament}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Breed;

export async function getServerSideProps({ query: { name } }) {

    //https://api.thecatapi.com/v1/breeds/search?q=Bengal
    //https://api.thecatapi.com/v1/images/search?name=Bengal
    const urlBreed = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
    const urlBreedImage = `https://api.thecatapi.com/v1/images/search?name=${name}`;

    const [resBreed, resBreedImage] = await Promise.all([
        fetch(urlBreed),
        fetch(urlBreedImage)
    ])

    const [breed, breedImage] = await Promise.all([
        resBreed.json(),
        resBreedImage.json()
    ])


    return {
        props: {
            breed,
            breedImage
        }
    }
}