// Search.tsx

const searchResults = 0;
const searchQuery = "blouse";

export default function Search() {
  return (
    <div id="results-container">
      <div id="results-header" className="flex flex-col justify-center">
        <h1 className="text-2xl text-center">{`Found ${searchResults} results for ${searchQuery}`}</h1>
      </div>
    </div>
  );
}
