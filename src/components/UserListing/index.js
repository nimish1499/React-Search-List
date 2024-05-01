import React, { useEffect, useRef } from "react";
import { HighlightText } from "../../Utils";

import "./userListing.css";

const UserListing = ({
  id,
  name="",
  items=[],
  address="",
  pincode="",
  active,
  onHover,
  index,
  eventName,
  query="",
}) => {
  const cardRef = useRef();

  useEffect(() => {
    if (eventName !== "hover" && active) {
      cardRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [active, eventName]);

  const handleHover = () => {
    if (!eventName.includes("key") && !active) {
      onHover(index);
    }
  };

  const matchingItems = items?.filter((item) =>
    item?.toLowerCase()?.includes(query?.toLowerCase())
  );

  return (
    <div
      className={`user-list ${active ? "active" : ""}`}
      ref={cardRef}
      onMouseOver={handleHover}
    >
      <div className="user_id">{HighlightText(id, query)}</div>
      <hr />
      <div className="user_name">{HighlightText(name, query)}</div>
      <hr />
      {matchingItems?.length > 0 ? (
        <div className="matching-items">
          <ul>
            {matchingItems.map((item, i) => (
              <li>
                <span className="highlight-text">{query}</span>
                <span> {"found in items"}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        items?.map((item, i) => (
          <div key={i}>
            {item.toLowerCase().includes(query.toLowerCase())
              ? HighlightText(item, query)
              : item}
          </div>
        ))
      )}
      <hr />
      <div>{HighlightText(address, query)}</div>
      <hr />
      <div>{HighlightText(pincode, query)}</div>
    </div>
  );
};

export default UserListing;
