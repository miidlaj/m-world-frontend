export default function LoginPage() {
  return (
    <>
      <div
        className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("/login-banner.jpeg")',
        }}
      >

        <div className="h-full w-full absolute inset-0 opacity-90 bg-gradient-to-br from-[#2FB574]/70 from-40% to-[#5BD03C] z-1" />
        <div className="px-16 py-10 max-sm:px-8 z-10">
          <div className="">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="/logo-temp.png"
                width={200}
                alt=""
                srcSet=""
              className=""
              />
            </div>
            <form action="#">
              <div className="text-base flex flex-col">
                <input
                  className="rounded-t-md border-b border-black bg-white/75 px-4 py-2 focus:outline-none placeholder:text-gray-600"
                  type="text"
                  name="name"
                  placeholder="MI'D"
                />

                <input
                  className="rounded-b-md border-none bg-white/75 px-4 py-2 focus:outline-none placeholder:text-gray-600"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                />
              </div>

              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-full text-base bg-white px-10 py-2 w-full text-primary font-medium transition-colors duration-300 ease-in-out hover:bg-white/80 text-primary/80"
                >
                  LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
