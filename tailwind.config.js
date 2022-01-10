module.exports = {
    content: [
        "./pages/_app.js",
        "./pages/index.js",
        "./pages/search.js",
        "./pages/seemore.js",
        "./pages/gameDetails/[id].js",
        "./components/Navbar.js",
        "./components/Layout.js",
        "./components/LatestGame.js",
        "./components/Game.js",
        "./components/Divider.js",
        "./components/Footer.js",
        "./pages/contact.js",
    ],
    theme: {
        extend: {
            colors: {
                purple: "#7200D6",
                error: "#FF0008",
            },
            fontFamily: { poppins: "Poppins", groches: "groches" },
            screens: {
                screenshorts: "1100px",
                xtablet: "930px",
                xmobile: "550px",
                mobile: "470px",
            },
        },
    },
    plugins: [],
};
