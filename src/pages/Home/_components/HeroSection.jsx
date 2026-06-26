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
    <section className="relative min-h-[720px] lg:min-h-[650px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07182d]/95 via-[#0b1f3a]/90 to-[#0b1f3a]/40" />

      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto min-h-[720px] lg:min-h-[650px] grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-12 lg:py-0">
        {/* Left Content */}
        <div className="max-w-[650px] text-white text-center lg:text-left">
          <p className="text-sm tracking-[4px] pb-3 text-[#b89b3c]">
            CHOICE TAILOR
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-4 font-bold leading-tight">
            Perfect Fit for <br className="hidden sm:block" />
            <span className="text-[#b89b3c]">Every Mission</span>
          </h1>

          <p className="text-sm sm:text-base font-light max-w-[560px] mx-auto lg:mx-0 pb-4 text-gray-200">
            Custom-made IAF uniforms designed with precision, stitched by
            experts, and delivered to your doorstep across India.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 font-medium justify-center lg:justify-start">
            <button className="text-sm border border-[#b89b3c] py-3 px-8 rounded-md bg-[#b89b3c] text-white">
              Order Your Uniform
            </button>

            <Dialog>
              <DialogTrigger>
                <div className="text-sm py-3 px-8 rounded-md border border-[#b89b3c] text-[#b89b3c]">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
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
            className="h-[360px] sm:h-[430px] md:h-[500px] lg:h-[560px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
