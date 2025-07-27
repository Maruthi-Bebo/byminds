import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);
export const navigationQuery = defineQuery(`*[_type == "navigation"][0]`);
export const footerQuery = defineQuery(`*[_type == "footer"][0]`);

const linkFields = `
  internalLink->{
    "slug":slug.current
  },
  externalLink
`;

const richTextFields = `
  markDefs[]{
    ...,
     ${linkFields}
  }
`;

const ctaFields = `
  ctaLabel,
  ctaLink{
    ${linkFields}
  },
  ctaColour
`;

const customImageFields = `
     "desktopImage":{
      "imageUrl": desktopImage.asset->url,
      "imageDimensions": desktopImage.asset->metadata.dimensions
  },
  "mobileImage":{
      "imageUrl": mobileImage.asset->url,
      "imageDimensions": mobileImage.asset->metadata.dimensions
  },
  caption
`;

const customVideoFields = `
  "desktopVideo":{
      "videoUrl": desktopVideo.videoFile.asset->url,
      "videoDimensions": {
          "width":desktopVideo.width,
          "height":desktopVideo.height,
      }
  },
  "mobileVideo":{
     "videoUrl": mobileVideo.videoFile.asset->url,
     "videoDimensions": {
          "width":mobileVideo.width,
          "height":mobileVideo.height,
      }
  }
`;

const customMediaFields = `
    mediaType,
    "image":{
      ...image,
      "desktopImage":{
        "imageUrl": image.desktopImage.asset->url,
        "imageDimensions": image.desktopImage.asset->metadata.dimensions
      },
      "mobileImage":{
        "imageUrl": image.mobileImage.asset->url,
        "imageDimensions": image.mobileImage.asset->metadata.dimensions
      },
    },
    "video":{
      ...video,
      "desktopVideo":{
        "videoUrl": video.desktopVideo.videoFile.asset->url,
        "videoDimensions": {
          "width":video.desktopVideo.width,
          "height":video.desktopVideo.height,
        }
      },
      "mobileVideo":{
        "videoUrl": video.mobileVideo.videoFile.asset->url,
        "videoDimensions": {
          "width":video.mobileVideo.width,
          "height":video.mobileVideo.height,
        }
      }
    }
`;

const titleAndDescriptionFields = `
  title,
  description[]{
    ...,
    ${richTextFields}
  },
  cta{
    ...,
    ${ctaFields}
  }
`;

const logoBannerFields = `
  media{
    ...,
    ${customMediaFields}
  },
  caption
`
const portraitBannerFields = `
  ...,
  media{
    ...,
    ${customMediaFields}
  },
  title[]{
    ...,
    ${richTextFields}
  },
  headingAndDesc[]{
    heading,
    desc[]{
      ...,
      ${richTextFields}
    }
  }
`
const ourWorkListingFields = `
  ...,
  title[]{
    ...,
    ${richTextFields}
  },
  caseStudies[]{
    images[]{
      image{
        ...,
        ${customMediaFields}
      }
    },
    link{
      ...,
      ${linkFields}
    }
  }
`

const pageFields = `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "date": coalesce(date, _updatedAt),
  "slug": slug.current,
  isHomePage,
  content[]{
    ...,
    _type == 'customImage' => {
     ...,
     ${customImageFields}
    },
    _type == 'customVideo' => {
     ...,
     ${customVideoFields}
    },
     _type == 'media' => {
     ...,
     ${customMediaFields}
    },
    _type == 'titleAndDescription' => {
     ...,
     ${titleAndDescriptionFields}
    },
    _type == 'logoBanner' => {
     ...,
     ${logoBannerFields}
    },
    _type == 'portraitBanner' => {
     ...,
     ${portraitBannerFields}
    },
    _type == 'ourWorkListing' => {
     ...,
     ${ourWorkListingFields}
    },
  },
  metaData{
     title,
     description,
     metadataBase,
     ogImage{
      "imageUrl": asset->url,
      "imageDimensions": asset->metadata.dimensions
    },
  }
`;

export const homePageQuery = defineQuery(`
  *[_type == "page" && isHomePage == true][0] {
    ${pageFields}
  }
`);

export const pageSlugsQuery = defineQuery(`
  *[_type == "page" && (isHomePage == false || isHomePage == null) ]{
    "slug": slug.current  
  }
`)

export const pageQuery = (slug: string) =>
  defineQuery(`
  *[_type == "page" && slug.current == "${slug}" && (isHomePage == false || isHomePage == null)][0] {
   ${pageFields}
 }
`);
