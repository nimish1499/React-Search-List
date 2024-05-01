import React, { useEffect, useState } from "react";
import { Search, UserListing } from "../../components";
import { UserData } from "../../handlers";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await UserData();
      setUsers(response);
    };
    fetchUsers();
  }, []);

  return (
    <div className="search-container">
      <Search
        searchBy={["id", "name", "items", "address", "pincode"]}
        placeholder={"Search users by ID, Address, Name ..."}
        options={users}
      >
        {(searchResult, cursor, setCursor, eventName, query) => {
          return searchResult.map((elm, index) => (
            <UserListing
              key={elm.id}
              active={cursor === index}
              onHover={setCursor}
              index={index}
              eventName={eventName}
              query={query}
              {...elm}
            />
          ));
        }}
      </Search>
    </div>
  );
};

export default HomeScreen;
