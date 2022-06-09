
const Barra = ({ breeds, setBreedId }) => {

    return (
        <header className="shadow-md px-24 py-7">
            <div className="contenedor md:flex justify-between items-center">
                <div>
                    <h1 className="text-2xl text-center mb-8 md:mb-0">Catstagram</h1>
                </div>
                <div className="flex justify-center">
                    <select 
                        className="border-2 py-2 px-10 rounded-md text-center"
                        onChange={e => setBreedId(e.target.value)}
                    >
                        <option>-- Select Breed --</option>
                        {breeds.map(breed => (
                            <option key={breed.id} value={breed.id}>{breed.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Barra

