import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import $ from 'jquery';

const NewMeta = () => {
// useEffect(() => {
//   // Add smart banner functionality here
//   $.smartbanner();
// }, []);
  useEffect(() => {
    // Dynamically load jQuery
    const scriptJQuery = document.createElement("script");
    scriptJQuery.src = "//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js";
    scriptJQuery.async = true;
    document.body.appendChild(scriptJQuery);

    // Dynamically load Smart Banner script
    const scriptSmartBanner = document.createElement("script");
    scriptSmartBanner.src = "./main.js";
    scriptSmartBanner.async = true;
    document.body.appendChild(scriptSmartBanner);

    // Initialize smart banner
    scriptSmartBanner.onload = () => {
      if (window.$) {
        window.$(() => {
          window.$.smartbanner({ daysHidden: 0, daysReminder: 0, title: "Hulu" });
        });
      }
    };

    // Cleanup on unmount
    return () => {
      document.body.removeChild(scriptJQuery);
      document.body.removeChild(scriptSmartBanner);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Hulu Plus</title>
        <meta name="author" content="Hulu LLC" />
        <meta name="apple-itunes-app" content="app-id=376510438" />
        <meta name="google-play-app" content="app-id=com.hulu.plus" />
        <meta name="msApplication-ID" content="App" />
        <meta name="msApplication-PackageFamilyName" content="HuluLLC.HuluPlus_fphbd361v8tya" />
        <meta name="msApplication-PackageEdgeName" content="9WZDNCRFJ3L1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="./main.css"
          type="text/css"
          media="screen"
        />
        <meta
          name="msapplication-TileImage"
          content="//store-images.s-microsoft.com/image/apps.24514.9007199266246590.00622cf5-f1da-43a1-a307-98c6bc7b088c.597ce205-1312-47f5-9247-144187518994?w=100&h=100&q=60"
        />
      </Helmet>
      <div>hii</div>
    </>
  );
};

export default NewMeta;
