import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import AddCabin from "../features/cabins/AddCabin";

const Cabins = () => {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h2">All Cabins</Heading>
                <CabinTableOperations/>
            </Row>
            <Row>
                <CabinTable/>
                <AddCabin/>
            </Row>
        </>
    )
};

export default Cabins;