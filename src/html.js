import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59CXZ74');
        `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PNEMPYHZKZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments)  }
              gtag('js', new Date());
    
              gtag('config', 'G-PNEMPYHZKZ');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                function vqTrackId() {
                    return '899f1b13-7186-4bfd-810f-9603c3d5fc89';
                } 
                (function(d, e) { 
                    var el = d.createElement(e);
                    el.sa = function(an, av){
                        this.setAttribute(an, av);
                        return this;
                    }; 
                    el.sa('id', 'vq_tracking')
                      .sa('src', '//t.visitorqueue.com/p/tracking.min.js?id='+vqTrackId())
                      .sa('async', 1)
                      .sa('data-id', vqTrackId());
                    d.getElementsByTagName(e)[0].parentNode.appendChild(el);
                })(document, 'script');             
            `,
          }}
        ></script>

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59CXZ74"
                  height="0" width="0" style="display:none;visibility:hidden">
          </iframe>
          `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
