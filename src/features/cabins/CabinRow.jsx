import styled from "styled-components";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import CabinForm from "./CabinForm";
import { useCreateCabin } from "./useCreateCabin";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

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
    const { createCabin } = useCreateCabin();
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
        <Table.Row>
            <Image src={image} alt={`cabin-${name}-interior`}/>
            <Cabin>{name}</Cabin>
            <div>Fits up to {maxCapacity} guests</div>
            <Price>{formatCurrency(regularPrice)}</Price>
            {discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={cabinId}/>
                        <Menus.List id={cabinId}>
                            <Modal.Open opens="edit-form">
                                <Menus.Button
                                    icon={<HiPencil/>}
                                >
                                    Edit
                                </Menus.Button>
                            </Modal.Open>
                            <Modal.Open opens="delete-form">
                                <Menus.Button
                                    icon={<HiTrash/>}
                                >
                                    Delete
                                </Menus.Button>
                            </Modal.Open>
                            <Menus.Button
                                icon={<HiSquare2Stack/>}
                                onClick={handleDuplicate}
                            >
                                Duplicate
                            </Menus.Button>
                        </Menus.List>
                        <Modal.Window name="edit-form">
                            <CabinForm cabinToEdit={cabin}/>
                        </Modal.Window>
                        <Modal.Window name="delete-form">
                            <ConfirmDelete
                                resoureName={`cabin-${name}`}
                                onConfirm={() => deleteCabin(cabinId)}
                                disabled={isDeleting}
                            />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}

CabinRow.propTypes = {
    cabin: PropTypes.any,
}


export default CabinRow;