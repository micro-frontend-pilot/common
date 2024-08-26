import AngularTestComponent from './AngularTestComponent';
import { react2angular } from 'react18-react2angular';

const ConvertedAngularComponent = react2angular(AngularTestComponent, []);

export default ConvertedAngularComponent;
