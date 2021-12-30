module.exports = {
    content: [
        "./pages/_app.js",
        "./pages/index.js",
        "./pages/seemore.js",
        "./pages/gameDetails/[id].js",
        "./components/Navbar.js",
        "./components/Layout.js",
        "./components/LatestGame.js",
        "./components/Game.js",
        "./components/Divider.js",
    ],
    theme: {
        extend: {
            colors: {
                purple: "#7200D6",
            },
            fontFamily: { poppins: "Poppins", groches: "groches" },
        },
    },
    plugins: [],
};
