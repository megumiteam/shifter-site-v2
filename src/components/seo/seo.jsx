import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Config } from "./../../config";


const seoImages = {
  openGraph: [
    "open-graph-blue.png",
    "open-graph-green.png",
    "open-graph-red.png",
    "open-graph-yellow.png"
  ],
  twitter: [
    "twitter-card-blue.png",
    "twitter-card-green.png",
    "twitter-card-red.png",
    "twitter-card-yellow.png"
  ],
  google: [
    "google-blue.png",
    "google-green.png",
    "google-red.png",
    "google-yellow.png"
  ]
};

const seoImageURL = file =>
  `https://s3.amazonaws.com/tmc-site-assets/graphics/${file}`;

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
      name: "twitter:image:src",
      content: seoImageURL(seoImages.twitter)
    },
    { name: "og:title", content: title },
    { name: "og:type", content: contentType },
    { name: "og:url", content: url },
    { name: "og:image", content: seoImageURL(seoImages.openGraph) },
    { name: "og:description", content: description },
    { name: "og:site_name", content: site_name },
    { name: "fb:app_id", content: "1645952115430593" }
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
