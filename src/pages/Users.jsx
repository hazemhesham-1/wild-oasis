import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

const Users = () => {
    return (
        <>
            <Heading as="h1">Add a new user</Heading>
            <SignupForm/>
        </>
    );
};

export default Users;