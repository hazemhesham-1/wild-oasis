import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CabinTable from "../features/cabins/CabinTable";
import CabinForm from "../features/cabins/CabinForm";
import { useState } from "react";

const Cabins = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Row type="horizontal">
                <Heading as="h2">All Cabins</Heading>
                <p>Filter / Sort</p>
            </Row>
            <Row>
                <CabinTable/>
                <Button
                    onClick={() => setShowForm(show => !show)}
                >
                    Add new cabin
                </Button>
                {showForm && <CabinForm/>}
            </Row>
        </>
    )
};

export default Cabins;