import { ShimmerSimpleGallery } from "react-shimmer-effects-18";
import React from "react";

const Shimmer = () => (
    <>
        <ShimmerSimpleGallery imageType="thumbnail" imageHeight={200} caption />
        {/* <ShimmerSimpleGallery card imageHeight={300} />
        <ShimmerSimpleGallery card imageHeight={300} caption /> */}
    </>
);

export default Shimmer;