import React from "react";
import classnames from "classnames";
import styled from "styled-components";
import { mergeArrays, removeDuplicates } from "../../utils/businessData";

interface IProps {
    businesses: any;
    categories: any;
    uniqueCategories: object[];
    subCategories: any;
    activeCategory: any;
    handleCategoryClick: (arr: [], string: string) => void;
    handleSelectSubCategory: (e: any) => void;
}

const StyledLi = styled.li`
  cursor: pointer;
  &:hover {
    p {
      color: #f38022 !important;
    }
  }
`;

class Categories extends React.Component<IProps> {
    render() {

        return (
            <>
                <div className="cat-box">
                    <div className="box-wrapper">
                        <p className="status-box color-black pt-3">Categories</p>
                        <ul className="sidemenu">
                            <StyledLi
                                className="category"
                                onClick={() => this.props.handleCategoryClick(this.props.businesses, "All")}
                            >
                                <div
                                    className={classnames("singlemenu", {
                                        curent: this.props.activeCategory === "All",
                                    })}
                                >
                                    <p className="day">All</p>
                                    <p className="day">{this.props.businesses.length}</p>
                                </div>
                            </StyledLi>
                            {this.props.uniqueCategories?.map((category: any, i: any) => {
                                const businessByCategory = this.props.businesses.filter((item: any) => {
                                    const catStrings = item.acf?.categories?.map(
                                        (cat: any) => cat.category1
                                    );
                                    return catStrings?.includes(category.category1);
                                });
                                return (
                                    <StyledLi
                                        key={category.category1}
                                        className="category"
                                        onClick={() =>
                                            this.props.handleCategoryClick(businessByCategory, category.category1)
                                        }
                                    >
                                        <div
                                            className={classnames("singlemenu", {
                                                curent: this.props.activeCategory === category.category1,
                                            })}
                                        >
                                            <p className="day">{category.category}</p>
                                            <p className="day">{businessByCategory?.length}</p>
                                        </div>
                                    </StyledLi>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <p className="status-box color-black pt-3 ml-4">Sub-Categories</p>
                <div className="customs-select">
                    <select onChange={(e) => this.props.handleSelectSubCategory(e)} name="sub-category" id="">
                        <option value="">Select sub-category</option>

                        {this.props.subCategories && removeDuplicates(this.props.subCategories, "sub_category").map(
                            (subcat: any, i: any) => {
                                let subCategoryStrings: any = [];
                                const businessBySubCategory = this.props.businesses.filter((item: any) => {
                                    item.acf.categories?.forEach((c: any) => {
                                        subCategoryStrings?.push(c.sub_categories);
                                    });

                                    subCategoryStrings = mergeArrays(subCategoryStrings);
                                    subCategoryStrings = subCategoryStrings
                                        ?.filter((s: any) => s && s.sub_category)
                                        ?.map((subCs: any) => subCs.sub_category);
                                    subCategoryStrings = removeDuplicates(subCategoryStrings);
                                    return subCategoryStrings?.includes(subcat.key);
                                });

                                return (
                                    <option
                                        key={`${i}-${subcat.key}`}
                                        value={JSON.stringify(businessBySubCategory)}
                                    >
                                        {subcat.sub_category}
                                    </option>
                                );
                            }
                        )}
                    </select>
                    <div className="arrows">
                        <img
                            src="../asset/right-arrow.svg"
                            alt=""
                            style={{ width: "14.2px", height: "auto" }}
                        />
                    </div>
                </div>
            </>
        );
    }


};

export default Categories;