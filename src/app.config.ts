export default {
  pages: ["pages/index/index"],
  subPackages: [
    {
      root: "subPages/skyline",
      pages: [
        "test/index",
      ]
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  lazyCodeLoading: "requiredComponents",
  rendererOptions: { "skyline": { "defaultDisplayBlock": true } }
};
