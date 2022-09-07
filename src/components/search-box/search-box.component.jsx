import './search-box.styles.css'; // this is just designation for me

const SearchBox = ({className, placeholder, onChangeHandler}) => {
        return (
            <input
            className={`search--box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}></input>
        )
    }


export default SearchBox;