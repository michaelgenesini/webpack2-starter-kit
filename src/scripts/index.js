import $ from 'jquery';
import 'bootstrap/scss/bootstrap.scss';

import '../styles/main.sass';

import Unicorn from '../static/images/unicorn.svg';

import App from './modules/index'

window.onload = () => {
	console.info('window loaded: ', App.name, Unicorn);
	let DOM = document.getElementById('__app')
	DOM.innerHTML = "<h1>Hello World, I'm "+App.name+"</h1>"
};
