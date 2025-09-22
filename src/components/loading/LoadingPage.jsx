import { Loader2 } from "lucide-react";

export const LoadingPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loader2 className="w-16 h-16 animate-spin" />
    </div>
  );
};
