import React from "react";
import Business from "../../Components/Business/Business";
import LoadingIndicator from "../../Components/Common/LoadingIndicator";
import AllData from "../../utils/allData";
import { removeDuplicates, structureCategories } from "../../utils/businessData";

interface IState {
    businesses?: object[];
    categories?: object[];
    uniqueCategories?: object[];
    subCategories?: object[];
    profiles?: object[];
    showFilters?: boolean;
    activeCategory?: string;
    loading: boolean;
}

class BusinessContainer extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props)
        this.state = { businesses: [], profiles: [], categories: [], subCategories: [], showFilters: false, activeCategory: "All", loading: true }
    }

    componentDidMount() {
        const getBusinesses = async () => {
            return await AllData.fetchBusinesses();
        }
        getBusinesses().then((business: any) => this.setState({ businesses: business }, () => {
            this.state.businesses?.forEach((bus: any) => {
                let businessCategories: any[] = [];
                let businessSubCategories: any[] = [];
                if (bus.acf.categories?.length) {
                    businessCategories.push(bus.acf.categories);
                    bus.acf.categories.forEach((sub: any) => {
                        if (sub.sub_categories?.length) {
                            businessSubCategories.push(sub.sub_categories);
                        }
                    })
                }
                const categoriesData = structureCategories(businessCategories, businessSubCategories);
                this.setState((prev: any) => ({ categories: [...prev.categories, ...categoriesData.objCategories], subCategories: [...prev.subCategories, ...categoriesData.arrSubCategories] }), () => {
                    let uniqueCategories: any[] = [];
                    this.state.categories?.map((cat: any) => uniqueCategories.push({ category: cat.category, category1: cat.category1 }));
                    uniqueCategories = removeDuplicates(uniqueCategories, "category")
                    this.setState({ uniqueCategories: uniqueCategories }, () => {
                        this.showProfiles(this.state.businesses, "All");
                        this.setState({ loading: false });
                    })
                });
            })
        }))
    }

    private showProfiles = (profiles: any, category: any) => {
        this.setState({ profiles: profiles });
        this.setState({ activeCategory: category });
        this.setState({ showFilters: false });
    };

    private handleSelectSubCategory = (e: any) => {
        if (e.target.value) {
            const persons = JSON.parse(e.target.value);
            this.setState({ profiles: persons });
        } else {
            this.setState({ profiles: this.state.businesses });
        }
        this.setState({ showFilters: false });
    };

    private handleFiltersToggle = (value: boolean) => {
        this.setState({ showFilters: value })
    }

    render() {
        return (
            <>
                {
                    this.state.loading ? <LoadingIndicator /> : (
                        <Business
                            businesses={this.state.businesses}
                            categories={this.state.categories}
                            subCategories={this.state.subCategories}
                            uniqueCategories={this.state.uniqueCategories}
                            activeCategory={this.state.activeCategory}
                            profiles={this.state.profiles}
                            handleCategoryClick={this.showProfiles}
                            handleSelectSubCategory={this.handleSelectSubCategory}
                            showFilters={this.state.showFilters}
                            toggleFilters={this.handleFiltersToggle}
                        />
                    )
                }
            </>
        )
    }
}

export default BusinessContainer;
