export default class AlbumContentListController {

	constructor($stateParams, contentService) {
		"ngInject";

		this.$stateParams = $stateParams;
		this.contentService = contentService;
	}

	$onInit() {
		this.getContentList();
	}

	onContentAdd(content) {
		this.getContentList();
	}

	getContentList() {
		let albumId = this.$stateParams.albumId;
		this.contentService.getAlbum(albumId).then((album) => {
			this.album = album;
			this.content = album.content;
		});
	}
}
