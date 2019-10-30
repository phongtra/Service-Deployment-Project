import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

const Main = ({ fetchInfos, infos }) => {
  useEffect(() => {
    fetchInfos();
    // eslint-disable-next-line
  }, []);
  const renderInfos = () => {
    if (infos.length === 0) {
      return;
    } else {
      return (
        <div style={{ marginTop: '2vh' }} className="ui cards">
          {infos.map(({ _id, school, major, gpa }) => {
            return (
              <div className="card" key={_id}>
                <div className="content">
                  <p>School: {school}</p>
                  <p>Major: {major}</p>
                  <p>GPA: {gpa}</p>
                  <Link className="ui button" to={`/info/edit/${_id}`}>
                    Edit
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  return (
    <div>
      <h1>Haha, you have officially authenticated</h1>
      <Link to="/form" className="ui button green">
        Click here to start adding something
      </Link>

      {renderInfos()}
    </div>
  );
};

const mapStateToProps = ({ infos }) => {
  return { infos };
};

export default connect(
  mapStateToProps,
  actions
)(Main);
