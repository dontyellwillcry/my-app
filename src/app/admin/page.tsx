

const AdminPage: React.FC = () => {
  
  
    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
            .then((response) => {
                // Check if the response is ok
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the JSON response
                return response;
            })
            .then((data) => {
                // Log the parsed JSON data
                console.log(data);
            })
            .catch((error) => {
                // Log any errors that occur during the fetch
                console.error('Error:', error);
            });
    };
    

    fetchPokemon();

  return <div>Pokemon</div>;
};

export default AdminPage;
