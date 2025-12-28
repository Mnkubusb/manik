export type FileItem = {
    id: number;
    name: string;
    icon: string;
    kind: string;
    fileType: string;
    position?: string;
    href?: string;
    imageUrl?: string;
    description?: string[];
    subtitle?: string;
    image?: string;
};

export type FolderItem = {
    id: number;
    name: string;
    icon: string;
    kind: string;
    position?: string;
    windowPosition?: string;
    children: Array<FileItem | FolderItem>;
};

export type LocationItem = {
    id: number;
    type: string;
    name: string;
    icon: string;
    kind: string;
    children: FolderItem[] | FileItem[];
};
