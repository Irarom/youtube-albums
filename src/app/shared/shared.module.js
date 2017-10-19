import angular from 'angular';

import ContentService from './content.service';
import TrustedFilter from './trusted.filter';

let mod = angular.module('app.shared', []);
mod.service('contentService', ContentService);
mod.filter('trusted', TrustedFilter);


export default mod.name;
