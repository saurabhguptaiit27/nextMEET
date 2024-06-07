import CallList from '@/components/CallList';

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
    <h1 className="text-3xl font-bold text-green-500 hover:text-green-400 cursor-pointer">Calls History</h1>

      <CallList type="ended" />
    </section>
  );
};

export default PreviousPage;
