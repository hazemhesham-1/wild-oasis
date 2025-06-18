import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import Select from "./Select";

const Sort = ({ options }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortValue = searchParams.get("sortBy") || "regularPrice-dsc";

    function handleChange(e) {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select value={sortValue} options={options} onChange={handleChange}/>
    );
};

Sort.propTypes = {
    options: PropTypes.array,
};

export default Sort;