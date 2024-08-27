import React from 'react';
import * as ReactDOM from 'react-dom/client';

import PropTypes from 'prop-types';

class AngularTestComponent extends React.Component {
    render() {
        return (
            <div id="react-test-component">
                message: { this.props.message }
            </div>
        )
    }
}

// const app = ReactDOM.createRoot(document.getElementById("app"));
// app.render(<AngularTestComponent />);

AngularTestComponent.propTypes = {
    message: PropTypes.string
}

export default AngularTestComponent;
