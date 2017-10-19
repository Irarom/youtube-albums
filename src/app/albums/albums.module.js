import angular from 'angular';

import AlbumThumbComponent from './list/album-thumb/album-thumb.component';
import AlbumListComponent from './list/album-list/album-list.component';
import AlbumContentThumbComponent from './content/album-content-thumb/album-content-thumb.component';
import AlbumAddContentComponent from './content/album-add-content/album-add-content.component';
import AlbumContentListComponent from './content/album-content-list/album-content-list.component';
import AlbumContentDetailed from './detailed/album-content-detailed/album-content-detailed.component';
import routing from './albums.routing';


let mod = angular.module('app.albums', []);
mod.component('albumContentList', AlbumContentListComponent);
mod.component('albumList', AlbumListComponent);
mod.component('albumThumb', AlbumThumbComponent);
mod.component('albumContentThumb', AlbumContentThumbComponent);
mod.component('albumContentDetailed', AlbumContentDetailed);
mod.component('albumAddContent', AlbumAddContentComponent);

mod.config(routing);


export default mod.name;
