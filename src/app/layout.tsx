import { ReduxProvider } from "@/lib/reduxProvider";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "@/theme/theme";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
        <StyledComponentsRegistry>
          <ReduxProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
