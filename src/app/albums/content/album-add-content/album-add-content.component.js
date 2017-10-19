import template from './album-add-content.html';
import controller from './album-add-content.controller';
import './album-add-content.scss';


export default {
	bindings: {
		newContent: '=',
		onChange: '&'
	},
	controller,
	template
}
