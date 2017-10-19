export default class AlbumContentDetailedController {

	constructor($stateParams, contentService) {
		"ngInject";

		this.contentService = contentService;
		this.$stateParams = $stateParams;
		this.albumId = this.$stateParams.albumId;
	}

	$onInit() {
		let albumId = this.$stateParams.albumId;
		let contentId = this.$stateParams.contentId;
		this.contentService.getContent(albumId, contentId).then((content) => {
			this.content = this.transformUrl(content);
		});
	}

	transformUrl(content) {
		content.url = content.url.replace('https', 'http').replace('watch?v=', 'embed/');
		return content;
	}

}
