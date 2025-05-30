import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Navbar() {
  return (
    <nav className="relative top-0 w-full z-50">
      <ul className="hidden sm:flex items-center justify-between px-6 py-4">
        <div className="flex gap-8 ml-7 text-[18px]">
          <Image src="/photos/logo.png" alt="Logo" width={46} height={46} />
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Achievements
            </a>
          </li>
        </div>
        <div>
      <Popover>
      <PopoverTrigger asChild>
        <InteractiveHoverButton>Free Trial</InteractiveHoverButton>
      </PopoverTrigger>
      <PopoverContent className="w-80 h-96 mr-8">
        <div className="grid gap-9">
          <div className="space-y-2">
            <h4 className="font-medium leading-none ml-20 ">7 Days Free Trail</h4>
            {/* <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p> */}
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Name">Name</Label>
              <Input
                id="Name"
                defaultValue="alax"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Email">Email</Label>
              <Input
                id="Email"
                defaultValue="@gmail.com"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Phone no">Phone no</Label>
              <Input
                id="Phone no"
                defaultValue="1234567890"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Age">Age </Label>
              <Input
                id="Age"
                defaultValue="99"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Message">Message </Label>
              <Input
                id="Message"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
        <Button className="mt-6 ">Submit</Button>
      </PopoverContent>
    </Popover>
        </div>
      </ul>



      <div className="sm:hidden">
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <div className="flex items-center justify-between px-6 py-3">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer flex flex-col w-6 h-6 justify-between"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 bg-black rounded transition-transform duration-300 peer-checked:rotate-45 peer-checked:translate-y-2.5"></span>
            <span className="block h-0.5 bg-black rounded transition-opacity duration-300 peer-checked:opacity-0"></span>
            <span className="block h-0.5 bg-black rounded transition-transform duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-2.5"></span>
          </label>
          <div className="flex-1 flex justify-center">
            <Image src="/photos/logo.png" alt="Logo" width={36} height={36} />
          </div>
      <Popover>
      <PopoverTrigger asChild>
        <InteractiveHoverButton>Free Trial</InteractiveHoverButton>
      </PopoverTrigger>
      <PopoverContent className="w-80 h-96">
        <div className="grid gap-9">
          <div className="space-y-2">
            <h4 className="font-medium leading-none self-center justify-center ">7 Days Free Trail</h4>
            {/* <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p> */}
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Name">Name</Label>
              <Input
                id="Name"
                defaultValue="alax"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Email">Email</Label>
              <Input
                id="Email"
                defaultValue="@gmail.com"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Phone no">Phone no</Label>
              <Input
                id="Phone no"
                defaultValue="1234567890"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Age">Age </Label>
              <Input
                id="Age"
                defaultValue="99"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Message">Message </Label>
              <Input
                id="Message"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
        <Button className="mt-6 ">Submit</Button>
      </PopoverContent>
    </Popover>
        </div>
        <ul className="hidden peer-checked:block px-6 pb-4 space-y-3 text-lg">
          <li>
            <a href="#home" className="hover:underline block">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline block">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline block">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline block">
              Achievements
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
