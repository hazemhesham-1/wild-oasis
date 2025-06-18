import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
    color: var(--color-grey-600);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 500;
`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 50px;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    outline: 2px solid var(--color-grey-100);
`;

const UserAvatar = () => {
    const { user } = useUser();
    const { avatar, fullName } = user.user_metadata;

    return (
        <StyledUserAvatar>
            <Avatar src={avatar || "/assets/default-avatar.png"} alt={`${fullName} avatar`}/>
            <span>{fullName}</span>
        </StyledUserAvatar>
    );
};

export default UserAvatar;