import RootShell, { rootMetadata } from "../_shared/RootShell";

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
