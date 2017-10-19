export default class AlbumListController {

	constructor(contentService) {
		"ngInject";

		this.contentService = contentService;
	}

	$onInit() {
		this.contentService.getAlbums().then((albums) => {
			this.albums = albums;
		});
	}

}
