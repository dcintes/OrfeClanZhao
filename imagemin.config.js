module.exports = {
  mozjpeg: { progressive: true, quality: 90 },
  pngquant: { quality: [0.9, 1] },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
  },
  webp: { quality: 90 },
};
