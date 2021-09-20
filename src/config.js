const { MODE } = require("./blendMode.js");
const description =
  "Some description for NFT";
const baseUri = "ipfs://QmTZ3U9a76CQSxF9e2kCwgUnmCRTPjUowhy5nisXSocdZR";

const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "1-background" },
      { name: "2-suit" },
      { name: "3-shoulder" },
      { name: "4-pin" },
      { name: "5-skin" },
      { name: "6-facial-hair" },
      { name: "7-mask" },
      { name: "8-hair" },
      { name: "9-accessories" },
      { name: "10-headwear" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
