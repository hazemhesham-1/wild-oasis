import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Account = () => {
    return (
        <>
            <Heading as="h1">Update your account</Heading>
            <Row>
                <Heading as="h2">Update user data</Heading>
                <Heading as="h3">Update user data form</Heading>
            </Row>
            <Row>
                <Heading as="h2">Update password</Heading>
                <Heading as="h3">Update password form</Heading>
            </Row>
        </>
    )
};

export default Account;