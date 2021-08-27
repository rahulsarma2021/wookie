import React from "react";

const Header = () => {
  return (
    <div className="header-container row d-flex align-items-center mt-5 mb-5">
      <div className="col">
        <h1 className="header-logo">Wookie Movies</h1>
      </div>
      
      <div className="col col-sm-4">
     
        <div class="form-outline">
    <input type="search" placeholder="Type here "  id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
     </div>
      </div>
    </div>
  );
};

export default Header;
