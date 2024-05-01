import React, { useState, useRef } from "react";

import "./searchResult.css";

import DataNotFound from "../DataNotFound";

const Search = ({
  options,
  searchBy = [],
  placeholder = "Enter Text Here",
  children,
}) => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [eventName, setEventName] = useState("hover");
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleBlur = () => {
    setOpen(false);
  };

  const handleChange = ({ target: { value } }) => {
    const newSearchResult = options?.filter((eachOption) => {
      for (let i = 0; i < searchBy?.length; i++) {
        const fieldValue = eachOption[searchBy[i]];
        if (typeof fieldValue === "string") {
          const isExist = fieldValue
            ?.toLowerCase()
            ?.includes(value?.toLowerCase());
          if (isExist) {
            return true;
          }
        } else if (Array.isArray(fieldValue)) {
          const isExist = fieldValue?.some((elm) =>
            elm.toLowerCase()?.includes(value?.toLowerCase())
          );
          if (isExist) {
            return true;
          }
        }
      }
      return false;
    });
    setSearchResult(newSearchResult);
    setCursor(0);
    setOpen(value?.length > 0);
    setQuery(value);
  };

  const handleKeyDown = (e) => {
    const isUpKey = e.keyCode === 38;
    const isDownKey = e.keyCode === 40;

    if (isUpKey && cursor > 0) {
      setCursor((prevCursor) => prevCursor - 1);
      setEventName("keyUp");
    } else if (isDownKey && cursor < searchResult.length - 1) {
      setCursor((prevCursor) => prevCursor + 1);
      setEventName("keyDown");
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setEventName("hover");
    }, 500);
  };

  const setCursorIndex = (index) => {
    setCursor(index);
    setEventName("hover");
  };

  const clearInput = (e) => {
    e.preventDefault();
    setQuery("");
  };

  const handleFocus = () => {
    setOpen(query?.length > 0);
    setCursor(0);
  };

  return (
    <div className="search">
      <div className="input-container">
        <input
          className="input-text"
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={query}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {query ? (
          <span className="clear-icon" onClick={clearInput}>
            &times;
          </span>
        ) : null}
      </div>
      {open ? (
        <div ref={timeoutRef}>
          {searchResult?.length > 0 ? (
            <div className="search-result">
              {children(searchResult, cursor, setCursorIndex, eventName, query)}
            </div>
          ) : (
            <DataNotFound data={"No User found"} />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
