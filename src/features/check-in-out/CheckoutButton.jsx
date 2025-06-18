import PropTypes from "prop-types";
import { useCheckout } from "./useCheckout";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

const CheckoutButton = ({ bookingId }) => {
    const { checkout, isCheckingOut } = useCheckout();

    return (
        <Button
            size="small"
            disabled={isCheckingOut}
            onClick={() => checkout(bookingId)}
        >
            {!isCheckingOut ? "Check out" : <SpinnerMini/>}
        </Button>
    );
};

CheckoutButton.propTypes = {
    bookingId: PropTypes.number,
};

export default CheckoutButton;