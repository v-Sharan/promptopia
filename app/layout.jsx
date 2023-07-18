"use client";

import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Nav, Provider } from "@components";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const queryClient = new QueryClient();

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </QueryClientProvider>
    </body>
  </html>
);

export default RootLayout;
