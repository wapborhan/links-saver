const LoaderWebsite = () => {
  return (
    <div className="bg-white/10 px-4 py-8 ring-2 ring-slate-900/5 rounded-xl shadow-lg max-w-xs w-full">
      <div className="mx-auto w-full text-center space-x-4 animate-pulse space-y-4">
        <div className="rounded-xl inline-block bg-slate-300  h-24 w-24"></div>
        <div className="h-8 mt-1 bg-slate-300 rounded"></div>
        <div className="flex gap-3">
          <div className="h-8 w-10/12 mt-1 bg-slate-300 rounded"></div>
          <div className="h-8 w-2/12 mt-1 bg-slate-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderWebsite;
