import content from "./common/content";
import link from "./common/link";
import customCta from "./common/customCta";
import customImage from "./common/customImage";
import customVideo from "./common/customVideo";
import media from "./common/media";
import pageMetaData from "./common/pageMetaData";
import richText from "./common/richText";
import page from "./documents/page";
import footer from "./singletons/footer";
import navigation from "./singletons/navigation";
import settings from "./singletons/settings";
import titleAndDescription from "./common/titleAndDescription";
import LogoBanner from "./sections/logoBanner";
import portraitBanner from "./sections/portraitBanner";
import ourWorkListing from "./sections/ourWorkListing";
import brandIcons from "./sections/brandIcons";
import services from "./sections/services";
import team from "./sections/team";
import otherMembers from "./sections/otherMembers";
import newsletter from "./sections/newsletter";

const schema = {
  types: [
    // Singletons
    settings,
    navigation,
    footer,

    // Documents
    page,

    //commmon
    pageMetaData,
    customImage,
    customVideo,
    media,
    content,
    link,
    richText,
    customCta,
    titleAndDescription,

    // sections
    LogoBanner,
    portraitBanner,
    ourWorkListing,
    brandIcons,
    services,
    team,
    otherMembers,
    newsletter
  ]
}

export default schema;