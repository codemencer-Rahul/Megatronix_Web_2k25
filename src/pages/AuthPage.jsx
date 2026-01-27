import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";
import { LetterGlitch } from "../components";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        // Simulate login (replace with actual API call)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          if (userData.email === data.email) {
            login(userData);
            toast.success("Login Successful!");
            setTimeout(() => navigate('/'), 1500);
          } else {
            toast.error("Invalid credentials!");
          }
        } else {
          toast.error("No account found. Please sign up first!");
        }
      } else {
        // Signup
        const userData = {
          name: data.name,
          email: data.email,
          registeredAt: new Date().toISOString(),
        };
        signup(userData);
        toast.success("Account Created Successfully!");
        setTimeout(() => navigate('/'), 1500);
      }
      reset();
    } catch (err) {
      console.error("Auth error:", err);
      toast.error("Authentication failed. Please try again.");
    }
  };

  return (
    <>
      <div className="relative min-h-screen overflow-auto">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
        
        <div className="absolute inset-0 pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-orbitron flex items-center justify-center overflow-auto">
          <ToastContainer theme="dark" position="bottom-right" />

          <div className="max-w-md w-full mx-auto my-8">
            <div
              className="relative rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden p-8 sm:p-10 pb-10"
            >
              <h2
                className="relative z-10 text-3xl sm:text-4xl font-bold font-orbitron text-center mb-10 tracking-widest pb-4"
                style={{
                  color: "var(--yellow-primary)",
                  borderBottom: "2px solid var(--yellow-border-soft)",
                  textShadow: "0 0 20px rgba(139, 46, 90, 0.5)",
                }}
              >
                {isLogin ? "LOGIN" : "SIGN UP"}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-5">
                {!isLogin && (
                  <div className="space-y-2">
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="FULL NAME"
                      className="w-full p-4 rounded-lg focus:outline-none transition-all font-orbitron text-sm tracking-wide placeholder:text-gray-500"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--yellow-border-soft)",
                        color: "var(--white)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--yellow-primary)";
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(139, 46, 90, 0.3)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--yellow-border-soft)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs block mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid Email",
                      },
                    })}
                    placeholder="EMAIL ADDRESS"
                    type="email"
                    className="w-full p-4 rounded-lg focus:outline-none transition-all font-orbitron text-sm tracking-wide placeholder:text-gray-500"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--yellow-border-soft)",
                      color: "var(--white)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--yellow-primary)";
                      e.currentTarget.style.boxShadow = "0 0 15px rgba(139, 46, 90, 0.3)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--yellow-border-soft)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs block mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type="password"
                    placeholder="PASSWORD"
                    className="w-full p-4 rounded-lg focus:outline-none transition-all font-orbitron text-sm tracking-wide placeholder:text-gray-500"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--yellow-border-soft)",
                      color: "var(--white)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--yellow-primary)";
                      e.currentTarget.style.boxShadow = "0 0 15px rgba(139, 46, 90, 0.3)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--yellow-border-soft)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.password && (
                    <span className="text-red-400 text-xs block mt-1">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))",
                    border: "1px solid var(--yellow-primary)",
                    color: "var(--white)",
                    boxShadow: "0 4px 20px rgba(139, 46, 90, 0.3)",
                  }}
                  className="w-full font-bold py-4 px-6 rounded-xl tracking-widest uppercase transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl mt-8"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 6px 30px rgba(139, 46, 90, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(139, 46, 90, 0.3)";
                  }}
                >
                  {isLogin ? "LOGIN" : "SIGN UP"}
                </button>
              </form>

              <div className="mt-8 text-center relative z-20">
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                  className="text-sm cursor-pointer relative z-20"
                  style={{ color: "var(--gray-text)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textUnderlineOffset = "4px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = "none";
                    e.currentTarget.style.textUnderlineOffset = "0px";
                  }}
                >
                  {isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
