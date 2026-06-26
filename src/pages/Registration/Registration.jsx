import {
  Mail,
  Lock,
  Eye,
  User,
  Phone,
  ArrowRight,
  ShieldCheck,
  Package,
  RefreshCcw,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { IoAirplane } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { logo, ShirtModel, CapModel, loginBG } from "@/assets/images";
import { registerSchema } from "@/validations/auth/registerSchema";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Registeration() {
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      await registerUser({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        password: data.password,
      });

      reset();
      // alert("Account created successfully");
      navigate("/login")
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#061735] bg-cover bg-center bg-no-repeat px-4 py-6 sm:px-6 lg:px-10"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      {/* <div className="absolute inset-0 bg-[#061735]/75 w-[70%] bg-cover bg-center" style={{ backgroundImage: `url(${loginBG})` }} /> */}
      <div className="absolute inset-0 bg-[#061735]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061735]/95 via-[#061735]/80 to-[#061735]/40" />
      {/* <div className="absolute inset-0 bg-gradient-to-l from-[#061735]/100 via-[#061735]/100 via-[#061735]/0 to-[#061735]/0" /> */}

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-48px)] max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
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
              Create your account, save measurements, track orders and reorder
              your uniforms anytime.
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

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[500px] rounded-2xl bg-white px-5 py-5 shadow-2xl sm:px-7 sm:py-6">
            <div className="text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f4f1eb] text-[#b08018]">
                <User size={20} />
              </div>

              <h2 className="mt-3 font-serif text-2xl font-bold text-[#061735]">
                Create Account
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Create your Choice Tailor account
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-3">
              <FormInput
                icon={<User size={17} />}
                type="text"
                placeholder="Enter your full name"
                register={register("fullName")}
                error={errors.fullName?.message}
              />

              <FormInput
                icon={<Mail size={17} />}
                type="email"
                placeholder="Enter your email address"
                register={register("email")}
                error={errors.email?.message}
              />

              <FormInput
                icon={<Phone size={17} />}
                type="tel"
                placeholder="Enter your phone number"
                register={register("phone")}
                error={errors.phone?.message}
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <FormInput
                  icon={<Lock size={17} />}
                  rightIcon={<Eye size={17} />}
                  type="password"
                  placeholder="Create password"
                  register={register("password")}
                  error={errors.password?.message}
                />

                <FormInput
                  icon={<Lock size={17} />}
                  rightIcon={<Eye size={17} />}
                  type="password"
                  placeholder="Confirm password"
                  register={register("confirmPassword")}
                  error={errors.confirmPassword?.message}
                />
              </div>

              <div>
                <label className="flex items-start gap-3 text-xs leading-relaxed text-[#061735]">
                  <input
                    type="checkbox"
                    {...register("terms")}
                    className="mt-0.5 h-4 w-4 accent-[#b89b3c]"
                  />
                  <span>
                    I agree to the{" "}
                    <button
                      type="button"
                      className="font-semibold text-[#b08018]"
                    >
                      Terms & Conditions
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="font-semibold text-[#b08018]"
                    >
                      Privacy Policy
                    </button>
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#c89227] px-5 py-3 text-base font-bold text-white hover:bg-[#b08018] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
                <ArrowRight size={20} />
              </button>
            </form>

            <div className="my-4 flex items-center gap-4">
              <span className="h-px flex-1 bg-gray-300" />
              <span className="text-xs font-medium text-[#061735]">OR</span>
              <span className="h-px flex-1 bg-gray-300" />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-md border px-5 py-2.5 text-sm font-bold text-[#061735] hover:bg-gray-50">
              <FcGoogle size={22} />
              Continue with Google
            </button>

            <p className="mt-4 text-center text-sm text-[#061735]">
              Already have an account?{" "}
              <button onClick={() => navigate("/login")} className="font-bold text-[#b08018]">Login</button>
            </p>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Lock size={15} />
              Your data is safe and secure with us.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormInput({ icon, rightIcon, type, placeholder, register, error }) {
  return (
    <div>
      <div
        className={`flex items-center gap-3 rounded-md border px-4 py-2.5 ${
          error ? "border-red-400" : "border-gray-300"
        }`}
      >
        <span className="text-gray-500">{icon}</span>

        <input
          type={type}
          placeholder={placeholder}
          {...register}
          className="w-full bg-transparent text-sm outline-none"
        />

        {rightIcon && <span className="text-gray-500">{rightIcon}</span>}
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
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