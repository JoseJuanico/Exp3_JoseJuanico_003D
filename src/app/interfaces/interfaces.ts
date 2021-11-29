export interface RespuestaMusicList {
	message: string;
	playlists: PlayLists; //objeto
}

export interface PlayLists {
	href: string;
	items: Items[];
}

export interface Items{
	description?: string;
	external_urls: External_URL;
	href: string;
	id: string;
	images: Images[];
	name: string;
	owner: Owner;
	primary_color?: string;
	public?: string;
	snapshot_id: string;
	tracks: Tracks;
	collaborative: boolean;
	type: string;
	uri: string;
}

export interface External_URL{
	spotify: string;
}

export interface Images{
	height?:string;
	url: string;
	width?: string;
}

export interface Owner{
	display_name: string;
	external_urls: External_URL;
	href: string;
	id: string;
	type: string;
	uri: string;
}

export interface Tracks{
	href: string;
	total: number;
}
