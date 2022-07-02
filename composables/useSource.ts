export type SourcesId = 'nt' | 'lh' | 'qq' | 'mgdx' | 'mgrd';
export interface MangaResource {
    sourceName: string;
    sourceId: SourcesId;
}

export const DEFAULT_SRC: SourcesId = 'nt';
export const MANGA_RESOURCE: MangaResource[] = [
    {
        sourceName: 'NT',
        sourceId: 'nt',
    },
];

export default function useSource() {
    const srcId =  DEFAULT_SRC;
    const srcName =
        MANGA_RESOURCE.find((src) => src.sourceId === srcId)?.sourceName ||
        MANGA_RESOURCE[0].sourceName;

    return [srcId, srcName];
}