import {
  Dialog,
  DialogClose,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { bgHero, dressModel, video } from "../../../assets/images";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player"

export default function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden lg:min-h-[650px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07182d]/95 via-[#0b1f3a]/90 to-[#0b1f3a]/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[720px] w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:min-h-[650px] lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-0">
        {/* Left Content */}
        <div className="max-w-[650px] text-center text-white lg:text-left">
          <p className="text-sm tracking-[4px] pb-3 text-[#b89b3c]">
            CHOICE TAILOR
          </p>

          <h1 className="pb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Perfect Fit for <br className="hidden sm:block" />
            <span className="text-[#b89b3c]">Every Mission</span>
          </h1>

          <p className="mx-auto max-w-[560px] pb-4 text-sm font-light text-gray-200 sm:text-base lg:mx-0">
            Custom-made IAF uniforms designed with precision, stitched by
            experts, and delivered to your doorstep across India.
          </p>

          {/* Buttons */}
          <div className="flex flex-col justify-center gap-4 py-6 font-medium sm:flex-row sm:gap-6 lg:justify-start">
            <button className="w-full rounded-md border border-[#b89b3c] bg-[#b89b3c] px-8 py-3 text-sm text-white sm:w-auto">
              Order Your Uniform
            </button>

            <Dialog>
              <DialogTrigger>
                <div className="w-full rounded-md border border-[#b89b3c] px-8 py-3 text-sm text-[#b89b3c] sm:w-auto">
                  How Measurement Works
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sticky Footer</DialogTitle>
                </DialogHeader>
                <div className="w-full flex justify-center items-center">
                  <ReactPlayer src={video} playing loop />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-md border border-white/20 bg-white/10 backdrop-blur-sm p-3 text-center">
              <p className="text-xs sm:text-sm">Custom Measurement</p>
            </div>

            <div className="rounded-md border border-white/20 bg-white/10 backdrop-blur-sm p-3 text-center">
              <p className="text-xs sm:text-sm">Saved Size Profile</p>
            </div>

            <div className="rounded-md border border-white/20 bg-white/10 backdrop-blur-sm p-3 text-center">
              <p className="text-xs sm:text-sm">Doorstep Delivery</p>
            </div>

            <div className="rounded-md border border-white/20 bg-white/10 backdrop-blur-sm p-3 text-center">
              <p className="text-xs sm:text-sm">IAF Uniform Specialists</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center lg:justify-end">
          <img
            src={dressModel}
            alt="IAF uniform model"
            className="h-auto w-full max-w-full object-contain sm:h-[430px] md:h-[500px] lg:h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
