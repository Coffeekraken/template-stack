// import some dependencies like polyfills, etc...
// require('@webcomponents/webcomponentsjs');
// require('@webcomponents/webcomponentsjs/custom-elements-es5-adapter');
// require('webcomponents.js/webcomponents-lite');
// main application entry point
import './webcomponent-import';
import './webcomponent-props';
import TemplateStack from './main';
window.TemplateStack = TemplateStack;
export default TemplateStack;
