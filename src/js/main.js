import Vue from 'vue/dist/vue'
import PageSwitcherComponent from './components/pages-switcher'
import key from 'keyboard-shortcut'
import style from '../../dist/css/style.css'

export default class TemplateStack {

	_options = {};

	/**
	 * TemplateStack constructor
	 * @param 		{Object} 		options 		The options to init the template stack with
	 */
	constructor(options) {

		// save options
		this._options = options;

		// init vue app
		this._initVueApp();
	}

	/**
	 * Init vue app
	 */
	_initVueApp() {
		let appWrapperElm = document.querySelector('#template-stack');
		if ( ! appWrapperElm) {
			appWrapperElm = document.createElement('div');
			appWrapperElm.id = 'template-stack';
			document.body.appendChild(appWrapperElm);
		}
		new Vue({
			el: appWrapperElm,
			data: () => {
				return {
					...this._options,
					pageSwitcher : false
				};
			},
			template: `
				<div id="template-stack" v-if="pageSwitcher">
					<template-stack-page-switcher v-bind:pages="pages"></template-stack-page-switcher>
				</div>
			`,
			mounted: function() {
				// listen for some keys
				key('ctrl p', () => {
					this.pageSwitcher = !this.pageSwitcher;
				});
				key('escape', () => {
					this.pageSwitcher = false;
				})
			}
		});
	}
}
