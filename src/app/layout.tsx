import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { ThemeProvider } from "@/theme/theme";
import GlobalStyle from "@/global/globalStyle";
import { ReduxProvider } from "@/lib/reduxProvider";
import StyledComponentsRegistry from "@/lib/registry";
import { QueryClientProvider } from "@/lib/queryClientProvider";

const mont_serrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "Desafio técnico MKS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={mont_serrat.className}>
        <QueryClientProvider>
          <StyledComponentsRegistry>
            <ReduxProvider>
              <ThemeProvider>
                <GlobalStyle />
                {children}
              </ThemeProvider>
            </ReduxProvider>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
