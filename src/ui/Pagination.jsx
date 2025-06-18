import PropTypes from "prop-types";
import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const StyledText = styled.p`
    font-size: 18px;
    margin-left: 10px;
    & span {
        font-weight: 600;
    }
`;

const Buttons = styled.div`
    display: flex;
    gap: 8px;
`;

const PaginationButton = styled.button`
    background-color: ${(props) =>
        props.$active ? "var(--color-brand-600)" : "var(--color-grey-50)"
    };
    color: ${(props) =>
        props.$active ? "var(--color-brand-50)" : "inherit"
    };
    border: none;
    border-radius: var(--border-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 16px;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.25s;

    &:has(span:last-child) {
        padding-left: 6px;
    }
    & svg {
        height: 26px;
        width: 26px;
    }
    &:hover:not(:disabled) {
        background-color: var(--color-brand-600);
        color: var(--color-brand-50);
    }
`;

const Pagination = ({ count }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const pageCount = Math.ceil(count / PAGE_SIZE);

    function prevPage() {
        if(currentPage === 1) return;

        searchParams.set("page", currentPage-1);
        setSearchParams(searchParams);
    }
    function nextPage() {
        if(currentPage === pageCount) return;

        searchParams.set("page", currentPage+1);
        setSearchParams(searchParams);
    }

    return (
        <StyledPagination>
            <StyledText>
                Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span>{" "}
                to <span>{currentPage === pageCount ? count : currentPage * PAGE_SIZE}</span> of <span>{count}</span> Results
            </StyledText>
            <Buttons>
                {currentPage === 1 ||
                <PaginationButton onClick={prevPage}>
                    <HiChevronLeft/>
                    <span>Previous</span>
                </PaginationButton>
                }
                {count < PAGE_SIZE ||
                <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
                    <span>Next</span>
                    <HiChevronRight/>
                </PaginationButton>
                }
            </Buttons>
        </StyledPagination>
    );
};

Pagination.propTypes = {
    count: PropTypes.number,
};

export default Pagination;