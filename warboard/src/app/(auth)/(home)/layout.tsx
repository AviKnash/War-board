import TopBar from "@/app/elements/TopBar";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      <section
        className="flex justify-center items-center"
        style={{ height: `calc(100vh - 9vh)` }}
      >
        {children}
      </section>
    </>
  );
};

export default layout;
