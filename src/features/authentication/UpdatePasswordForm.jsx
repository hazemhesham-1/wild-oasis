import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateUser } from "./useUpdateUser";

const UpdatePasswordForm = () => {
    const { register, formState, handleSubmit, getValues, reset } = useForm();
    const { errors } = formState;
    const { updateUser, isUpdating } = useUpdateUser();

    function onSubmit({ password }) {
        updateUser({ password }, { onSuccess: reset });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="New password (min 8 characters)" error={errors?.password?.message}>
                <Input
                    type="password"
                    id="password"
                    disabled={isUpdating}
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 8,
                            message: "Password needs a minimum of 8 characters or symbols"
                        }
                    })}
                />
            </FormRow>
            <FormRow label="Confirm password" error={errors?.passwordConfirm?.message}>
                <Input
                    type="password"
                    id="passwordConfirm"
                    disabled={isUpdating}
                    {...register("passwordConfirm", {
                        required: "This field is required",
                        validate: (value) => value === getValues().password || "Passwords do not match"
                    })}
                />
            </FormRow>
            <FormRow>
                <Button type="reset" disabled={isUpdating} onClick={reset}>Cancel</Button>
                <Button disabled={isUpdating}>Update password</Button>
            </FormRow>
        </Form>
    );
};

export default UpdatePasswordForm;