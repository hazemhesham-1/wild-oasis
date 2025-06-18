import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import Textarea from "../../ui/Textarea";

const CabinForm = ({ cabinToEdit = {}, onModalClose }) => {
    const { createCabin, isCreating } = useCreateCabin();
    const { editCabin, isEditing } = useEditCabin();
    const isLoading = isCreating || isEditing;

    const { id: editId, ...editValues } = cabinToEdit;
    const isEditSession = Boolean(editId);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        reset
    } = useForm({defaultValues: isEditSession ? editValues : {}});

    function onSubmit(data) {
        const image = typeof data.image === "string" ? data.image : data.image[0];
        if(isEditSession) {
            editCabin({ newCabinData: {...data, image}, id: editId }, {
                onSuccess: () => {
                    reset();
                    onModalClose?.();
                }
            });
        }
        else {
            createCabin({...data, image}, {
                onSuccess: () => {
                    reset();
                    onModalClose?.();
                }
            });
        }
    }

    if(isLoading) return <Spinner/>

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            type={onModalClose ? "modal" : "regular"}
        >
            <FormRow label="Cabin Name" error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "This field is required"
                    })}
                />
            </FormRow>
            <FormRow label="Maximum Capacity" error={errors?.max_capacity?.message}>
                <Input
                    type="number"
                    id="maxCapacity"
                    {...register("max_capacity", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "Capacity should be at least 1"
                        },
                    })}
                />
            </FormRow>
            <FormRow label="Regular Price" error={errors?.regular_price?.message}>
                <Input
                    type="number"
                    id="regularPrice"
                    {...register("regular_price", {
                        required: "This field is required",
                    })}
                />
            </FormRow>
            <FormRow label="Discount" error={errors?.discount?.message}>
                <Input
                    type="number"
                    id="discount"
                    {...register("discount", {
                        required: "This field is required",
                        validate: (value) => (Number(value) <= getValues().regular_price) || "Discount should be less than regular price"
                    })}
                />
            </FormRow>
            <FormRow label="Description for website" error={errors?.description?.message}>
                <Textarea
                    type="text"
                    id="description"
                    {...register("description", {
                        required: "This field is required"
                    })}
                />
            </FormRow>
            <FormRow label="Cabin Photo">
                <FileInput
                    type="file"
                    accept="image/*"
                    id="imageURL"
                    {...register("image", {
                        required: isEditSession ? false : "This field is required"
                    })}
                />
            </FormRow>
            <FormRow>
                <Button type="reset" onClick={() => onModalClose?.()}>
                    Cancel
                </Button>
                <Button disabled={isLoading}>
                    {`${isEditSession? "Edit" : "Add New"} Cabin`}
                </Button>
            </FormRow>
        </Form>
    );
};

CabinForm.propTypes = {
    cabinToEdit: PropTypes.any,
    onModalClose: PropTypes.func,
};

export default CabinForm;