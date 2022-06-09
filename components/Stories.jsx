import Image from "next/image";
import Link from "next/link";

const Stories = ({ breedsStories }) => {

  return (
    <section className="contenedor pt-12">
      <div className="grid grid-cols-2 gap-5 md:flex md:justify-between">
        {breedsStories.map(breed => (
          <Link key={breed.id} href={`/breeds/${breed.name}`} >
            <div className="flex flex-col items-center cursor-pointer">
              <Image className="rounded-full w-20" width={100} height={100} src={breed.image.url} alt="Cat Image" />
              <p>{breed.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Stories