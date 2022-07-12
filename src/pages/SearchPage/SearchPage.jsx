import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSearch } from '../../redux/actions/Main';

class SearchPage extends Component {
  render() {
    return (
      <div>SearchPage</div>
    )
  }
  componentDidMount() {
    this.props.dispatch(fetchSearch(this.props.location.params.tenKhoaHoc));
  }
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps) (SearchPage)