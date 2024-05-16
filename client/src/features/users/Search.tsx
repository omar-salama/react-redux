import { useState } from 'react';

const Search = ({
  handleFilterQuery,
}: {
  handleFilterQuery: (value?: string) => void;
}) => {
  const [name, setName] = useState<string | undefined>(undefined);

  const handleSearch = () => {
    handleFilterQuery(name);
  };

  return (
    <div className="Search">
      <div className="row justify-content-center">
        <div className="col-9 col-md-7">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Find user by name"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              className="btn btn-primary ps-4 pe-4"
              onClick={handleSearch}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
