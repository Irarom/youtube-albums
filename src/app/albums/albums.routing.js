export default ($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('albumList', {
			url: '/albums',
			component: 'albumList'
		})
		.state('albumContentList', {
			url: '/albums/{albumId}',
			component: 'albumContentList'
		})
		.state('albumContentDetailed', {
			url: '/albums/{albumId}/{contentId}',
			component: 'albumContentDetailed'
		});
}
