import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Config } from "./../../config";


const seoImages = {
  openGraph: "2018/05/Shifter-OpenGraph_Facebook.jpg",
  twitter:  "2018/05/Shifter-OpenGraph_Twitter.jpg",
  google: "2018/05/Shifter-OpenGraph_Facebook.jpg",
};

const seoImageURL = file =>
  `https://api.digitalcube.jp/wp-content/uploads/${file}`;

const getMetaTags = ({
  title,
  site_name,
  description,
  url,
  contentType,
  published,
  updated,
  category,
  tags,
  twitter
}) => {
  const metaTags = [
    { itemprop: "name", content: title },
    { itemprop: "description", content: description },
    { itemprop: "image", content: seoImageURL(seoImages.google) },
    { name: "description", content: description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: `@${twitter}` },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: `@${twitter}` },
    {
      name: "twitter:image",
      content: seoImageURL(seoImages.twitter)
    },
    { itemprop: "og:title", content: title },
    { itemprop: "og:type", content: contentType },
    { itemprop: "og:url", content: url },
    { itemprop: "og:image", content: seoImageURL(seoImages.openGraph) },
    { itemprop: "og:description", content: description },
    { itemprop: "og:site_name", content: site_name },
    { itemprop: "fb:app_id", content: "1896326020616793" }
  ];

  if (published)
    metaTags.push({ name: "article:published_time", content: published });
  if (updated)
    metaTags.push({ name: "article:modified_time", content: updated });
  if (category) metaTags.push({ name: "article:section", content: category });
  if (tags) metaTags.push({ name: "article:tag", content: tags });

  return metaTags;
};

const SEO = ({
  schema,
  title,
  description,
  path,
  contentType,
  published,
  updated,
  category,
  tags,
  twitter,
  site_name,
  canonical
}) => (
  <Helmet
    htmlAttributes={{
      lang: "en",
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`
    }}
    title={title}
    link={[{ rel: "canonical", href: canonical }]}
    meta={getMetaTags({
      title,
      description,
      contentType,
      url: Config.canonicalUrl,
      published,
      updated,
      category,
      tags,
      twitter
    })}
  />
);

SEO.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string,
  site_name: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  contentType: PropTypes.string,
  published: PropTypes.string,
  updated: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.array,
  twitter: PropTypes.string,
  canonical: PropTypes.string
};

SEO.defaultProps = {
  title: Config.title,
  twitter: Config.twitterHandle,
  site_name: Config.site_name,
  description: Config.description,
  canonical: Config.canonicalUrl
};

export default SEO;
