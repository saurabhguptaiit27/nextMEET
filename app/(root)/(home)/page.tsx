import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
    now,
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-8 max-md:py-4 p-16">
          <a
            className="glassmorphism max-w-[293px] rounded-lg py-2 text-center text-base text-black font-extrabold"
            href="https://csmock.vercel.app"
          >
            👉 Go To <span className="text-blue-600 font-extrabold">CS</span>
            <span className="text-lime-500 font-extrabold">mock</span> To Find
            an Expert
          </a>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-7xl">
              {time[0]}
              <span className="text-red-600">{time.slice(1, 2)}</span>
              <span>{time.slice(2, 5)}</span>
              <span className="text-5xl text-lime-400">{time.slice(5)}</span>
            </h1>
            <p className="text-lg font-medium lg:text-2xl text-yellow-300">
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
