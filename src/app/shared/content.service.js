import angular from 'angular';


export default class ContentService {

	constructor($http, $q) {
		"ngInject";

		this.$http = $http;
		this.$q = $q;
		this.cachedData = null;
		this.fetchData();
	}

	fetchData() {
		return this.$http.get('./assets/mock-data/content.json').then((res) => {
			this.cachedData = res.data;
			return this.cachedData;
		});
	}

	getAlbums(useCached) {
		if (this.cachedData === null) {
			return this.fetchData();
		}
		let deferred = this.$q.defer();
		let albums = useCached ? this.cachedData : angular.copy(this.cachedData);
		deferred.resolve(albums);
		return deferred.promise;
	}

	getAlbum(id, useCached) {
		return this.getAlbums(useCached).then((albums) => {
			return albums.filter((album) => {
				return album.id === parseInt(id);
			})[0];
		});
	}

	getContent(albumId, contentId) {
		albumId = parseInt(albumId);
		contentId = parseInt(contentId);
		return this.getAlbum(albumId).then((album) => {
			return album.content.filter((contentItem) => {
				return contentItem.id === contentId;
			})[0];
		});
	}

	addContentToAlbum(albumId, payload) {
		payload = angular.copy(payload);
		return this.defineIdForContentItem(albumId).then((returnedId) => {
			payload.id = returnedId;
			return this.getAlbum(albumId, true).then((album) => {
				album.content.push(payload);
				album.content_count++;
				return album;
			});
		});
	}

	defineIdForContentItem(albumId) {
		let largestId = parseInt('' + albumId + '01');
		return this.getAlbum(albumId).then((album) => {
			album.content.map((contentItem) => {
				if (largestId < contentItem.id) {
					largestId = contentItem.id;
				}
			});
			return largestId + 1;
		});
	}

}
