const StatusContainer = () => {
  return (
    <div>
      <h3 className="font-bold">Status</h3>
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        <span className="capitalize">member of the united nations</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        <span className="capitalize">Independent</span>
      </label>
    </div>
  );
};

export default StatusContainer;
