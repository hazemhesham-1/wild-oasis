import PropTypes from "prop-types";
import styled from "styled-components";

const StyledStat = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    display: grid;
    grid-template-columns: 90px 1fr;
    grid-template-rows: auto auto;
    column-gap: 20px;
    row-gap: 5px;
    padding: 20px;
`;

const Icon = styled.div`
    background-color: var(--color-${(props) => props.color}-100);
    border-radius: 50%;
    grid-row: span 2;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;

    & svg {
        color: var(--color-${(props) => props.color}-700);
        height: 50px;
        width: 50px;
    }
`;

const Title = styled.h5`
    color: var(--color-grey-500);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

const Value = styled.p`
    font-size: 30px;
    font-weight: 600;
`;

const Stat = ({ icon, color, title, value }) => {
    return (
        <StyledStat>
            <Icon color={color}>{icon}</Icon>
            <Title>{title}</Title>
            <Value>{value}</Value>
        </StyledStat>
    );
};

Stat.propTypes = {
    icon: PropTypes.any,
    color: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.any,
};

export default Stat;