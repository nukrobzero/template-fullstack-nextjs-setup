export default function Sections({ children }: { children: any }) {
  return (
    <div className="xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm flex flex-wrap items-center mx-auto p-4">
      {children}
    </div>
  );
}
