import { h, Component } from 'preact';
import {
  SearchBox,
  Layout,
  LayoutBody,
  LayoutResults,
  ActionBar,
  TopBar,
  ActionBarRow,
  SideBar,
  RangeFilter,
  RefinementListFilter,
  Hits,
  NoHits,
  HitsStats,
  SelectedFilters,
  SortingSelector,
  Pagination,
  ResetFilters
} from "searchkit";

import style from './style';

const HitItem = (props) => {
  console.log(props.result);
  return (
      <div style="position: relative; width: 100%;">
        <h4 style="margin-bottom: 0.4em;"><i>{props.result._source.brandName}</i></h4>
        <h2 style="margin-top: 0;">{props.result._source.productName}</h2>
        <div><label htmlFor=""><strong>Price: </strong></label>${props.result._source.price}</div>
        <div><label htmlFor=""><strong>Rating: </strong></label>
          {new Array(props.result._source.customerRating).fill('☆').map(rating => (<span>{rating}</span>))}</div>
        <hr style="border: 1px dashed #ccc; margin-bottom: 2em; margin-top: 0.8em;"/>
      </div>
  );
};

export default class Home extends Component {
  render() {
    return (
        <div class={style.home}>
          <Layout>
            <TopBar>
              <SearchBox
                  autofocus={true}
                  searchOnChange={true}
                  prefixQueryFields={["brandName^10"]}/>
            </TopBar>
            <LayoutBody>
              <SideBar>
                <RangeFilter field="customerRating" id="customerRating" min={1} max={5} showHistogram={true} title="Customer Rating"/>
                <RangeFilter field="price" id="price" min={0} max={50} showHistogram={true} title="Price"/>
                <RefinementListFilter id="brandName" title="Brand" field="brandName.keyword" operator="OR"/>

              </SideBar>
              <LayoutResults>
                <ActionBar>

                  <ActionBarRow>
                    <HitsStats/>
                    <SortingSelector options={[
                      {label:"Relevance", field:"_score", order:"desc", defaultOption:true},
                      {label:"Price", field:"price", order:"asc"},
                      {label:"Highly Rated", key:"rating", fields: [
                        {field:"customerRating", options: {order:"desc"}},
                        {field:"price", options: {order:"asc", "mode" : "avg"}}
                      ]}
                    ]}/>
                  </ActionBarRow>

                  <ActionBarRow>
                    <SelectedFilters/>
                    <ResetFilters/>
                  </ActionBarRow>

                </ActionBar>
                <Hits mod="sk-hits-list" hitsPerPage={10} itemComponent={HitItem}
                      scrollTo="body"
                      />
                <NoHits/>
                <Pagination showNumbers={true}/>
              </LayoutResults>
            </LayoutBody>
          </Layout>
        </div>
    );
  }
}
