import angular from 'angular';
import BrandHeaderComponent from './brand-header/brand-header.component';

import './common.scss';

let mod = angular.module('app.common', []);
mod.component('brandHeader', BrandHeaderComponent);


export default mod.name;
