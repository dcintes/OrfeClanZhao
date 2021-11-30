/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import bootstrap from "bootstrap";

/**
 * Write any other JavaScript below
 */

+(function () {
  randomizeGallery();
})();

function randomizeGallery() {
  console.log("test");
  Array.from(document.querySelectorAll(".gallery__element")).forEach((e) => {
    e.style.order = Math.floor(Math.random() * 50);
  });
}
