import DysgraphiaSidebar from "@/components/dysgraphia/DysgraphiaSidebar";

export default function DysgraphiaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <DysgraphiaSidebar />
      <main className="">{children}</main>
    </div>
  );
}
