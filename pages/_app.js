import Layout from "../components/Layout";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../app/Store";

function MyApp({ Component, pageProps }) {
    // const queryClient = new QueryClient();

    return (
        // <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
        // </QueryClientProvider>
    );
}

export default MyApp;
