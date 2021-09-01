import styled, { css } from "styled-components";
import { isDesktopOrLarger, isTabletOrMobile } from "../../utils/screens";
import IconFilter from "../../asset/SVGIcons/IconFilter";
import Categories from "./Categories";
import { FC } from "react";
import Profiles from "../../Containers/Business/Profiles";

interface IProps {
    businesses: any;
    categories: any;
    uniqueCategories: any;
    subCategories: any;
    activeCategory: any;
    profiles: any;
    handleCategoryClick: (arr: [], string: string) => void;
    handleSelectSubCategory: (e: any) => void;
    showFilters: any;
    toggleFilters: any;
}

const StyledBusinessPage = styled.section`
  padding: 1rem !important;
  background-color: #ffffff;
  ${isDesktopOrLarger(
    css`
      display: flex;
      flex-flow: row nowrap;
      padding: 4rem 5rem !important;
    `
)};
`;

const CategoriesWrapper = styled.div`
  ${isTabletOrMobile(css`
    display: none;
  `)}
`;

const ModalWrapper = styled.div`
  background-color: white;
  margin: 1rem 0;
  border-radius: 3px;
  padding: 2rem 1rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 110vh;
  z-index: 1000;
  display: none;
  align-items: flex-start;

  ${isTabletOrMobile(css`
    display: flex;
  `)}

  .close-btn {
    font-size: 1.5rem;
    position: fixed;
    right: 1rem;
    top: 1rem;
  }
`;

const FilterButton = styled.button`
  border-radius: 4px;
  border: none;
  white-space: nowrap;
  height: 50px;
  width: 100px;
  display: none;
  background-color: #eee;

  path {
    fill: #1f3044;
  }

  ${isTabletOrMobile(css`
    display: block;
  `)}
`;

const Business: FC<IProps> = (props: IProps) => {
    return (
        <StyledBusinessPage className="mag pt-8">
            <FilterButton onClick={() => props.toggleFilters(true)}>
                <IconFilter /> Filter
            </FilterButton>
            <CategoriesWrapper className="col-lg-3">
                <Categories
                    businesses={props.businesses}
                    categories={props.categories}
                    subCategories={props.subCategories}
                    uniqueCategories={props.uniqueCategories}
                    activeCategory={props.activeCategory}
                    handleCategoryClick={props.handleCategoryClick}
                    handleSelectSubCategory={props.handleSelectSubCategory}
                />
            </CategoriesWrapper>
            {props.showFilters && (
                <ModalWrapper>
                    <span className="close-btn" onClick={() => props.toggleFilters(false)}>
                        &times;
                    </span>
                    <div style={{ width: "100%", marginTop: "4rem" }}>
                        <Categories
                            businesses={props.businesses}
                            categories={props.categories}
                            uniqueCategories={props.uniqueCategories}
                            subCategories={props.subCategories}
                            activeCategory={props.activeCategory}
                            handleCategoryClick={props.handleCategoryClick}
                            handleSelectSubCategory={props.handleSelectSubCategory}
                        />
                    </div>
                </ModalWrapper>
            )}
            <Profiles businesses={props.profiles} />
        </StyledBusinessPage>
    )
}

export default Business;