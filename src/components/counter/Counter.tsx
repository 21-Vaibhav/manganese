import { create } from "zustand";
import "./Counter.css";

// ✅ Define the store's state and actions
interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

// ✅ Define Zustand store with type
const useStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export const BearCounter = () => {
  const { bears, increasePopulation, removeAllBears } = useStore(); // ✅ No more TypeScript error!

  return (
    <div className="bear-counter-root">
      <p>{bears} bears in my zoo!</p>{" "}
      {/* ✅ TypeScript now knows bears exists */}
      <button onClick={increasePopulation}>Add bears</button>
      <button onClick={removeAllBears}>Remove all bears</button>
    </div>
  );
};

export default BearCounter;
