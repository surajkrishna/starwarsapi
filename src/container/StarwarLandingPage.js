import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoriyCard } from "../presentation/CategoryCard";
import { Scroll } from "../presentation/Scroll";
import { SearchResult } from "../presentation/searchResults";
import { Loading } from "../presentation/Loading";
import * as actionCreator from "../store/ActionCreators";

class StarwarLandingPage extends Component {
  constructor() {
    super();
    this.state = {
      context: ""
    };
  }

  fetchStarWarsDataOnSelect = (url, context) => {
    this.props.fetchStarWarsData(url);
    this.setState({ context });
  };

  componentDidMount() {
    this.props.starWarCategoryList();
  }

  render() {
    const { categories, isLoading, swData, isSearchResultLoading } = this.props;
    const { context } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        {categories && (
          <div className="cardContainer">
            <CategoriyCard
              loadCategory={this.fetchStarWarsDataOnSelect}
              categories={categories}
            />
          </div>
        )}
        {
          <Scroll>
            {isSearchResultLoading ? (
              <Loading />
            ) : (
              swData.length && <SearchResult data={swData} context={context} />
            )}
          </Scroll>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    isLoading: state.isLoading,
    swData: state.swData,
    isSearchResultLoading: state.isSearchResultLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    starWarCategoryList: () => dispatch(actionCreator.loadCategory()),
    fetchStarWarsData: url => dispatch(actionCreator.fetchStarWarsData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarwarLandingPage);
