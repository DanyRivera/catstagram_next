import Image from "next/image";
import Barra from "../components/Barra";
import Stories from "../components/Stories";
import Feed from "../components/Feed";

export default function Home({ breeds, breedsStories, setBreedId, breedId }) {

  const breed = breeds.find(breed => breed.id === breedId);

  return (
    <div>

      <Barra
        breeds={breeds}
        setBreedId={setBreedId}
      />

      <Stories
        breedsStories={breedsStories}
      />

      <section className="contenedor py-24">
        <h2 className="text-center text-4xl md:mb-10 md:text-5xl">Your Select</h2>

        {breed !== undefined ? (
          <div className="md:grid md:grid-cols-3 ">
            <div className="text-center mt-5 px-2 md:px-0">
              <Image className="rounded-md" width={400} height={250} src={breed.image.url} alt={`${breed.name} Image`} />
            </div>
            <div className="px-4 md:col-start-2 md:col-end-4">
              <p className="my-3 text-2xl font-bold md:text-5xl">{breed.name}</p>
              <p className="text-xl md:text-2xl">{breed.description}</p>
            </div>
          </div>
        ) : (
          <p className="text-center pt-5 text-xl md:text-2xl">You need to select a Breed in the TopBar</p>
        )}

      </section>

      <Feed 
        breeds={breeds}
      />

    </div>
  )
}

export async function getServerSideProps() {

  const urlBreeds = "https://api.thecatapi.com/v1/breeds";
  const urlBreedsStories = "https://api.thecatapi.com/v1/breeds?limit=10&page=1";

  const [resBreeds, resBreedsStories] = await Promise.all([
    fetch(urlBreeds),
    fetch(urlBreedsStories)
  ])

  const [breeds, breedsStories] = await Promise.all([
    resBreeds.json(),
    resBreedsStories.json()
  ])

  return {
    props: {
      breeds,
      breedsStories
    }
  }
}
