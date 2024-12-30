import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 640px;
    font-size: 22px;
    & p {
        color: var(--color-grey-500);
        margin-bottom: 18px;
    }
    & div {
        display: flex;
        justify-content: flex-end;
        gap: 18px;
    }
`;

const ConfirmDelete = ({ resoureName, onConfirm, onModalClose, disabled }) => {
    return (
        <StyledConfirmDelete>
            <Heading as="h3">Delete {resoureName}</Heading>
            <p>Are you sure you want to delete this {resoureName}?<br/>
            <span>This action cannot be undone.</span></p>
            <div>
                <Button
                    type="secondary"
                    disabled={disabled}
                    onClick={onModalClose}
                >
                    Cancel
                </Button>
                <Button
                    type="danger"
                    disabled={disabled}
                    onClick={onConfirm}
                >
                    Delete
                </Button>
            </div>
        </StyledConfirmDelete>
    );
}

ConfirmDelete.propTypes = {
    resoureName: PropTypes.string,
    onConfirm: PropTypes.func,
    onModalClose: PropTypes.func,
    disabled: PropTypes.bool,
};

export default ConfirmDelete;