import React from "react";
import styled from "styled-components";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { grid_view, setGridView, setListView } = useFilterContext();

  return (
    <Wrapper className="sort-section">
      {/* First Column - Sort Component */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setListView}
        >
          <FaList className="icon" />
        </button>
      </div>

      {/* Second Column - Sort Component */}
      <div className="product-data">Product Available</div>

      {/* Third Column - Sort Component */}
      <div className="sort-selection">Price Dropdown</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.btn};
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
