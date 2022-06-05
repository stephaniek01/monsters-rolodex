import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    type="search"
    spellCheck="false"
    className={className}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
