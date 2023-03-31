export default function Sections({ children }: { children: any }) {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
      {children}
    </div>
  );
}
