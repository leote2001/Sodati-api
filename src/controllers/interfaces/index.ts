export interface ISodatiController {
getAlbums(table: string): Promise<any[]>;
getAlbumById(table: string, id: string | number): Promise<any>;
getTracklist(table: string, id: string | number): Promise<any[]>;
}