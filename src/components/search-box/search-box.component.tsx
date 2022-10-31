import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder: string;
  // "ChangeEventHandler" is a functional type definition
  // it expects an event type as a param
  // HTMLInputElement is the type definition of the input element
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // another way of writing the above type (without the "ChangeEventHandler" type)
  // use the "ChangeEvent" type
  onChangeHandler2?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    type="search"
    spellCheck="false"
    className={className}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
