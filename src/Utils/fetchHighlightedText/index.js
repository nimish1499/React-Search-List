const HighlightText = (text, query) => {
  const queryIndex = text?.toLowerCase()?.indexOf(query?.toLowerCase());
  if (queryIndex === -1) return text;

  const beforeQuery = text.slice(0, queryIndex);
  const queryText = text.slice(queryIndex, queryIndex + query.length);
  const afterQuery = text.slice(queryIndex + query.length);

  return (
    <>
      {beforeQuery}
      <span className="highlight-text">{queryText}</span>
      {afterQuery}
    </>
  );
};

export default HighlightText;
