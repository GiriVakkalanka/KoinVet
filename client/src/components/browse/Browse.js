//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import HitComponent from './HitComponent';
//import Logo from '../';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';

const Sidebar = () => <div className="sidebar" />;

const Hit = ({ hit }) => (
  // <div>
  //   <h1>{hit.email}</h1>
  // </div>
  <HitComponent
    name={hit.name}
    rate={hit.rate}
    desc={hit.description}
    city={hit.city}
    country={hit.country}
    specialization={hit.specialization}
    expertise={hit.expertise}
    links={hit.links}
    id={hit._id}
  />
);

const Content = () => (
  <div className="content">
    <Hits hitComponent={Hit} />
  </div>
);

class Browse extends Component {
  render() {
    return (
      <div>
        <InstantSearch
          apiKey="53d73d0deaf00b036b6bc83b99f998b1"
          appId="ND8QXFOQUH"
          indexName="KoinVetDev"
        >
          <header>
            <SearchBox translations={{ placeholder: 'Search for Products' }} />
          </header>
          <main>
            <Sidebar />
            <Content />
          </main>
        </InstantSearch>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Browse);
