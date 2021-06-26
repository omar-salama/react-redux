const Search = () => {
  return (
    <div className="Search">
      <div class="input-group mb-4 w-50 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Find user by name"
        />
        <button class="btn btn-primary ps-4 pe-4">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
