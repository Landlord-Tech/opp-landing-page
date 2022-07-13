import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"
import cloudinary from "netlify-cms-media-library-cloudinary"

// import IndexPreview from "./preview-templates/IndexPreview"

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [
    {
      name: "url",
      label: "Youtube video URL",
      widget: "string",
    },
  ],
  pattern: /^`youtube:\s(.*)`$/,
  fromBlock: function (match) {
    return {
      url: match[1],
    }
  },
  toBlock: function (obj) {
    return "`youtube: " + obj.url + "`"
  },
  toPreview: function (obj) {
    return obj.url
  },
})

// CMS.registerPreviewTemplate('homepage', IndexPreview)
