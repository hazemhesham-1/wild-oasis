import { useState } from "react";
import { useUser } from "./useUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useUpdateUser } from "./useUpdateUser";

const UpdateUserDataForm = () => {
    const { updateUser, isUpdating } = useUpdateUser();
    const { user: { email, user_metadata: { fullName: currentFullName }}} = useUser();
    const [fullName, setFullName] = useState(currentFullName);
    const [avatar, setAvatar] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        if(!fullName) return;

        updateUser({fullName, avatar}, {
            onSuccess: () => {
                setAvatar(null);
                e.target.reset();
            }
        });
    }

    function handleReset() {
        setFullName(currentFullName);
        setAvatar(null);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRow label="Full name">
                <Input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={isUpdating}
                />
            </FormRow>
            <FormRow label="Email address">
                <Input
                    type="text"
                    value={email}
                    disabled={true}
                />
            </FormRow>
            <FormRow label="Upload avatar">
                <FileInput
                    id="avatar"
                    accept="image/*"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    disabled={isUpdating}
                />
            </FormRow>
            <FormRow>
                <Button
                    type="reset"
                    onClick={handleReset}
                    disabled={isUpdating}
                >
                    Cancel
                </Button>
                <Button disabled={isUpdating}>Update account</Button>
            </FormRow>
        </Form>
    );
};

export default UpdateUserDataForm;