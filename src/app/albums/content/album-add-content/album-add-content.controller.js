export default class AlbumAddContentController {

	constructor($stateParams, contentService) {
		"ngInject";

		this.contentService = contentService;
		this.$stateParams = $stateParams;
		this.popupOpened = false;
		this.form = {};
		this.youtubeLinkRegex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
	}

	onSubmit(form) {
		let albumId = this.$stateParams.albumId;
		this.contentService.addContentToAlbum(albumId, this.form).then(() => {
			this.clearForm(form);
			this.onChange();
			this.closePopup();
		});
	}

	openPopup() {
		this.popupOpened = true;
	}

	closePopup() {
		this.popupOpened = false;
	}

	togglePopup() {
		this.popupOpened = !this.popupOpened;
	}

	clearForm(form) {
		this.form = {};
		if (form) {
			form.$setPristine();
			form.$setUntouched();
		}
	}



}
