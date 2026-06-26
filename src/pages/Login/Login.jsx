import {
  Mail,
  Lock,
  Eye,
  User,
  ArrowRight,
  ShieldCheck,
  Package,
  RefreshCcw,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { IoAirplane } from "react-icons/io5";

import { logo, ShirtModel, CapModel, loginBG } from "@/assets/images";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { loginSchema } from "@/validations/auth/loginSchema";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginUser, getProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await loginUser({
        email: data.email,
        password: data.password,
      });

      const userId = result?.user?.id;

      if (!userId) {
        throw new Error("User not found");
      }

      const userProfile = await getProfile(userId);

      if (userProfile?.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#061735] bg-cover bg-center bg-no-repeat px-4 py-6 sm:px-6 lg:px-10"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <div className="absolute inset-0 bg-[#061735]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061735]/95 via-[#061735]/80 to-[#061735]/40" />

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-48px)] max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        {/* Left Content */}
        <div className="hidden text-white lg:block">
          <div className="max-w-[520px]">
            <img
              src={logo}
              alt="Choice Tailor"
              className="mx-auto h-16 w-16 object-contain"
            />

            <div className="mt-3 text-center">
              <h1 className="font-serif text-3xl font-bold">CHOICE TAILOR</h1>
              <p className="mt-1 text-sm">Perfect Fit for Every Mission</p>

              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-[#b89b3c]" />
                <IoAirplane className="text-[#b89b3c]" />
                <span className="h-px w-12 bg-[#b89b3c]" />
              </div>
            </div>

            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight xl:text-4xl">
              Precision Tailoring.
              <br />
              <span className="text-[#d4a52f]">Built for Heroes.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-200">
              Specialized in IAF uniforms and accessories with precision
              tailoring, quality fabrics and dedicated service.
            </p>

            <div className="mt-6 space-y-4">
              <Feature
                icon={<ShieldCheck size={18} />}
                title="Save your measurements"
                desc="for perfect fit every time."
              />
              <Feature
                icon={<Package size={18} />}
                title="Track orders"
                desc="and stay updated."
              />
              <Feature
                icon={<RefreshCcw size={18} />}
                title="Reorder with ease"
                desc="anytime."
              />
              <Feature
                icon={<Lock size={18} />}
                title="Secure, private"
                desc="and always yours."
              />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-6 left-[23%] hidden items-end lg:flex">
            <img
              src={CapModel}
              alt="IAF cap"
              className="h-20 object-contain xl:h-24"
            />
            <img
              src={ShirtModel}
              alt="IAF uniform"
              className="h-56 object-contain xl:h-64"
            />
          </div>
        </div>

        {/* Form */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-7 sm:py-7">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f1eb] text-[#b08018]">
                <User size={20} />
              </div>

              <h2 className="mt-4 font-serif text-2xl font-bold text-[#061735]">
                Welcome Back
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Login to your Choice Tailor account
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#061735]">
                  Email Address
                </label>

                <div
                  className={`flex items-center gap-3 rounded-md border px-4 py-3 ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  }`}
                >
                  <Mail size={18} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email")}
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#061735]">
                  Password
                </label>

                <div
                  className={`flex items-center gap-3 rounded-md border px-4 py-3 ${
                    errors.password ? "border-red-400" : "border-gray-300"
                  }`}
                >
                  <Lock size={18} />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                    className="w-full bg-transparent text-sm outline-none"
                  />
                  <Eye size={18} />
                </div>

                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-[#061735]">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 accent-[#b89b3c]"
                  />
                  Remember Me
                </label>

                <button type="button" className="font-medium text-[#b08018]">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#c89227] px-5 py-3 text-base font-bold text-white hover:bg-[#b08018] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Logging in..." : "Login"}
                <ArrowRight size={20} />
              </button>
            </form>

            <div className="my-5 flex items-center gap-4">
              <span className="h-px flex-1 bg-gray-300" />
              <span className="text-xs font-medium text-[#061735]">OR</span>
              <span className="h-px flex-1 bg-gray-300" />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-md border px-5 py-3 text-sm font-bold text-[#061735] hover:bg-gray-50">
              <FcGoogle size={22} />
              Continue with Google
            </button>

            <p className="mt-5 text-center text-sm text-[#061735]">
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/registration")}
                className="font-bold text-[#b08018]"
              >
                Create Account
              </button>
            </p>

            <p className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Lock size={15} />
              Your data is safe and secure with us.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b89b3c] text-[#b89b3c]">
        {icon}
      </div>

      <p className="text-sm leading-relaxed">
        <span className="font-bold">{title}</span>
        <br />
        {desc}
      </p>
    </div>
  );
}
