module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: `
              @import "@/style/_reset.scss";
                  `,
        },
      },
    },
  };