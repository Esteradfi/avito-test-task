export type Movie = {
    id: string,
    name?: string | null,
    description?: string,
    alternativeName?: string | null,
    isSeries?: boolean,
    poster?: {
        previewUrl?: string | null,
        url?: string | null
    },
    rating?: {
        imdb?: number | null,
        kp?: number | null
    }
};

export type Actor = {
    description: string | null,
    enName: string | null,
    enProfession: string | null
    id: string,
    name: string | null,
    photo: string | null,
    profession: string | null
}

export type Season = {
    airDate: string,
    enName: string,
    id: string,
    name: string,
    number: number
    episodes: Episode[]
}

export type Episode = {
    airDate: string,
    enName: string,
    name: string,
    number: number
}

export type PrevLocation = {
    path: string,
    queries: string
}

export type Poster = {
    id: string,
    previewUrl: string,
    url: string
}

export type SimilarMovie = {
    name: string | null,
    alternativeName: string | null,
    id: string,
    poster: {
        previewUrl: string | null,
        url: string | null,
    }
}

export type Reviews = {
    list: Review[],
    pages: number,
    currentPage: number
}

export type Review = {
    id: string,
    title: string,
    type: string,
    review: string,
    author: string,
    date: string,
}

export type Filters = {
    countriesFilter: FilterList,
    yearsFilter: FilterAge,
    ageFilter: FilterList
};

export type FilterList = {
    list: string[],
    selectedList: string[]
};

export type FilterAge = {
    min: string,
    max: string,
    selectedMin: string,
    selectedMax: string
}

export type FilterResponseData = {
    name: string,
    slug: string
};