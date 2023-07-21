import Image from "next/image";
import Link from "next/link";

const Stories = ({ breedsStories }) => {

  return (
    <section className="contenedor pt-12">
      <div className="grid grid-cols-2 gap-5 md:flex md:justify-between">
        {breedsStories.slice(1).map(breed => (
          <Link key={breed.id} href={`/breeds/${breed.name}`} >
            <div className="flex flex-col items-center cursor-pointer">
              <Image
                className="rounded-full w-20"
                width={100}
                height={100}
                src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                alt="Cat Image" />
              {breed.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Stories