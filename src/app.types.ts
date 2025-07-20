import { ImageDimensions } from "sanity";

// Extract the type excluding null
export type WithoutNull<T> = T extends null ? never : T;

export type Tlink = {
    internalLink?: {
        slug: string | null;
    } | null;
    externalLink?: string | null;
};

export type CustomCtaProps = {
    ctaLabel?: string;
    ctaLink: Tlink | null;
    ctaColour?: string;
};

export type CustomImageProps = {
    desktopImage?: {
        imageUrl?: string;
        imageDimensions?: ImageDimensions;
    };
    mobileImage?: {
        imageUrl?: string;
        imageDimensions?: ImageDimensions;
    };
    width?: number | string;
    height?: number | string;
    className?: string;
    isLCP?: boolean;
    caption?: string;
};

export type SingleImage = {
    imageUrl?: string;
    imageDimensions?: ImageDimensions;
}

export type CustomVideoProps = {
    desktopVideo?: {
        videoUrl?: string;
        videoDimensions?: {
            width: number;
            height: number;
        };
    };
    mobileVideo?: {
        videoUrl?: string;
        videoDimensions?: {
            width: number;
            height: number;
        };
    };
    showMuteIcon?: boolean;
    width?: number | string;
    height?: number | string;
    className?: string;
    containerClassName?: string
    defaultMediaLoading?: (loading: boolean) => void;
    mobileMediaLoading?: (loading: boolean) => void;
};

export interface TCustomMedia {
    mediaType: "image" | "video";
    image?: CustomImageProps;
    video?: CustomVideoProps
}