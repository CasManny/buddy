import DyslexiaSidebar from "@/components/dyslexia/DyslexiaSidebar";

export default function AdhdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <DyslexiaSidebar />
      <main className="">{children}</main>
    </div>
  );
}
