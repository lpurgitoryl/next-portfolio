import NavBar from "@/app/components/NavBar";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <NavBar />
      <section className="flex justify-start items-start flex-col pl-14 md:pl-28 pr-14 pt-10 break-words dark:text-white">
        <h1 className="text-7xl md:text-9xl">{params.slug}</h1>
        <h1 className="pt-12 text-xl md:w-4/5">
          Take a look at some of my favorite projects. These cover diffrent
          categories from IOT, embedded systems, computer vision and more.
        </h1>
      </section>
    </main>
  );
}
