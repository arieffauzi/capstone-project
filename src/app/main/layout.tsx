import Sidebar from "@/component/common/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
