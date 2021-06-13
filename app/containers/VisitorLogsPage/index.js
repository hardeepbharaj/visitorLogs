import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';

const VisitorLogsPage = props => {
  const { logs = [] } = props;

  return (
    <div className="list-container">
      <h1>Visitor Logs</h1>
      <ul>
        {logs.map(data => (
          <li>
            <div>Name: {data.name}</div>
            <div>Email: {data.email}</div>
            <div>Type of Visit: {data.typeOfVisit}</div>
            <div>Person To Visit: {data.personToVisit}</div>
            <div>DateOfEntry: {data.personToVisit}</div>
            <div>Time of Entry: {data.timeOfEntry}</div>
            <div>Time of Exit: {data.timeOfExit}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  logs: state.visitorLogs.logs,
});

VisitorLogsPage.propTypes = {
  logs: PropTypes.array,
};

export default connect(mapStateToProps)(VisitorLogsPage);
