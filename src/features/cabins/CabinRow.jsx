import styled from "styled-components";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CabinForm from "./CabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 10px;
    align-items: center;
    padding: 10px 18px;
    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;
const Image = styled.img`
    height: 54px;
    width: 81px;
    object-fit: cover;
    transform: translateX(-16px);
`;
const Cabin = styled.div`
    color: var(--color-green-600);
    font-family: "Sono";
    font-size: 18px;
    font-weight: 600;
`;
const Price = styled.div`
    font-family: "Sono";
    font-weight: 600;
`;
const Discount = styled.div`
    color: var(--color-green-700);
    font-family: "Sono";
    font-weight: 500;
`;

const CabinRow = ({ cabin }) => {
    const [showForm, setShowForm] = useState(false);
    const { createCabin, isCreating } = useCreateCabin();
    const { deleteCabin, isDeleting } = useDeleteCabin();

    const {
        id: cabinId,
        name,
        image,
        description,
        max_capacity: maxCapacity,
        regular_price: regularPrice,
        discount
    } = cabin;

    function handleDuplicate() {
        createCabin({
            name: name.startsWith("Copy of") ? name : `Copy of ${name}`,
            image,
            description,
            max_capacity: maxCapacity,
            regular_price: regularPrice,
            discount
        });
    }

    return (
        <>
            <TableRow role="row">
                <Image src={image} alt={`cabin-${name}-interior`}/>
                <Cabin>{name}</Cabin>
                <div>Fits up to {maxCapacity} guests</div>
                <Price>{formatCurrency(regularPrice)}</Price>
                {discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
                <div>
                    <button onClick={handleDuplicate} disabled={isCreating}>
                        <HiSquare2Stack/>
                    </button>
                    <button onClick={() => setShowForm(show => !show)}>
                        <HiPencil/>
                    </button>
                    <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
                        <HiTrash/>
                    </button>
                </div>
            </TableRow>
            {showForm && <CabinForm cabinToEdit={cabin}/>}
        </>
    );
}

CabinRow.propTypes = {
    cabin: PropTypes.any,
}


export default CabinRow;