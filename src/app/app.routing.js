export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
	"ngInject";

	$locationProvider.html5Mode(false);
	$urlRouterProvider.otherwise( '/' );

	$stateProvider
		.state('root', {
			url: '/',
			redirectTo: 'albumList'
		})


}
