import Sidebar from "../components/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto scorlll">
          {children}
          </main>
      </div>
    );
}