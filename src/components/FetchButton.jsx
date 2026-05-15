// Step 1: Accept `onClick` as a prop

const FetchButton = ({ onClick }) => {
  return (
    // Step 2: Add an onClick event that calls the handler
    <button className="fetch-button" onClick={onClick}>
      Get a New Joke
    </button>
  )
}

export default FetchButton
