// src/components/LoginPageSkeleton.jsx
const LoginPageSkeleton = () => {
  return (
    <div className="flex items-center justify-around h-screen bg-gray-100">
      <div className="w-[450px] h-25 animate-pulse ">
        <div class="h-100 bg-gray-200 rounded w-100 mb-4"></div>
      </div>
      <div className="p-4 w-25 rounded-xl shadow-md bg-white animate-pulse">
        <div className="h-10 bg-gray-300 rounded mb-4" />
        <div className="flex justify-between mt-4">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4 mx-auto" />
        </div>
        <div className="h-10 bg-gray-300 rounded w-full mb-4" />
        <div className="h-10 bg-gray-300 rounded w-full mb-4" />

        <div className="h-4 bg-gray-300 rounded w-1/2 mt-6 mx-auto" />
      </div>
    </div>
  );
};

export default LoginPageSkeleton;
