import { CheckCircle, AlertCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export const showToast = (
  message: string,
  type: "success" | "error" = "success",
  duration = 5000,
) => {
  const container = document.createElement("div");
  container.setAttribute("id", `toast-${Date.now()}`);
  document.body.appendChild(container);

  const Toast = ({ onClose }: { onClose: () => void }) => {
    return (
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
        <div
          className={`
            flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg 
            backdrop-blur-sm border font-heading font-semibold
            ${
              type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                : "bg-red-50 border-red-200 text-red-900"
            }
          `}
        >
          {type === "success" ? (
            <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
          )}
          <p className="max-w-sm">{message}</p>
          <button
            onClick={onClose}
            className="ml-2 flex-shrink-0 hover:opacity-70 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  };

  const exampleRoot = document.getElementById(
    container.getAttribute("id") || "",
  );
  if (!exampleRoot) return;

  import("react-dom").then(({ createRoot }) => {
    const root = createRoot(container);
    root.render(
      <Toast
        onClose={() => {
          root.unmount();
          container.remove();
        }}
      />,
    );

    setTimeout(() => {
      if (container.parentElement) {
        root.unmount();
        container.remove();
      }
    }, duration);
  });
};
