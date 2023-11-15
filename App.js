/**
 * parcel - bundler
 * HMR - hot module Replacement
 * file watcher algorithm - c++
 * Building
 * Minify
 * cleaning our code
 * Dev and production Build
 * Super Fast build algorithm
 * Image optimization
 * Caching while development
 * compression
 * compatable with older version of browser
 * HTTPS on dev
 * port Number
 * Consisting Hashing Algorithms
 * Zero config
 * transitive dependencies
 * tree sharing
 *
 *
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h2">
    Namaste react
  </h1>
)
// components
// functional component
// component composing
const HeadingComponent = () => {
  return (
    <div>
        <Title />
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
