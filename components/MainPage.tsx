"use client";

import Navbar from "@/components/Navbar";
import TypewriterTitle from "@/components/TypewriterTitle";
import { useInView } from "react-intersection-observer";
import fortuneUrl from "@/public/fortune.jpg";
import weirdUrl from "@/public/weird.jpg";
import Image from "next/image";
import Link from "next/link";

export default function MainPage() {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const { ref: textRef, inView: textView } = useInView({
        triggerOnce: true,
    });

    return (
        <>
            <Navbar />
            <div className="container text-center py-32 flex flex-col gap-10 items-center">
                <div className="text-4xl font-extrabold animate-top-page">
                    Welcome to
                </div>
                <h2 className="text-3xl text-purple-600 h-[40px]">
                    <TypewriterTitle />
                </h2>
                <div className="text-2xl animate-top-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="mt-6 sm:h-[400px] sm:w-[640px] h-[200px] w-[320px]  border border-stone-100 relative">
                    <Image
                        className="object-cover"
                        fill
                        src={fortuneUrl}
                        alt="fortune cookie"
                    />
                </div>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima nemo fuga dolor quia veniam pariatur ea sint. Ipsa,
                    quam, harum soluta numquam sunt excepturi earum ipsum enim
                    laboriosam nam error.
                </div>
                <div
                    ref={ref}
                    className={`mt-6 sm:h-[400px] sm:w-[640px] h-[200px] w-[320px]  border border-stone-100 relative ${
                        inView ? "animate-show-image" : "opacity-0"
                    }`}
                >
                    <Image
                        className="object-cover"
                        fill
                        src={weirdUrl}
                        alt="fortune cookie"
                    />
                </div>
                <div
                    ref={textRef}
                    className="mt-6 border-t border-stone-500 border-b w-[100%] h-[300px] flex items-center px-6 relative overflow-hidden mb-6"
                >
                    <div>
                        <div
                            className={`w-1/2 hover:underline ${
                                textView
                                    ? "animate-text-fade-in-left"
                                    : "hidden"
                            }`}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur quidem doloribus asperiores ipsum
                            fugit aspernatur.
                        </div>
                    </div>
                    <div
                        className={`w-1/2 hover:underline ${
                            textView ? "animate-text-fade-in-right" : "hidden"
                        }`}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, dolores!
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 sm:gap-20 justify-center">
                    <div className="h-[350px] w-[320px] border border-stone-500 py-10 px-8 transform ease-in hover:translate-y-[-2%] duration-200 hover:border-stone-100 hover:cursor-pointer sm:scale-110">
                        <div className="flex justify-between items-center text-4xl text-start">
                            <div>Title</div>
                            <span className="text-base text-purple-500 hover:underline self-end">
                                <Link href={"/"}>Link</Link>
                            </span>
                        </div>
                        <div className="flex flex-col h-full justify-center text-center text-stone-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Accusamus, facere quam quia porro iusto
                            possimus sapiente eligendi hic dolorem at quidem
                            magnam voluptatem veniam quasi quae voluptatibus
                            vero tempore voluptates.
                        </div>
                    </div>
                    <div className="h-[350px] w-[320px] border border-stone-500 py-10 px-8 transform ease-in hover:translate-y-[-2%] duration-200 hover:border-stone-100 hover:cursor-pointer sm:scale-110">
                        <div className="flex justify-between items-center text-4xl text-start">
                            <div>Title</div>
                            <span className="text-base text-purple-500 hover:underline self-end">
                                <Link href={"/"}>Link</Link>
                            </span>
                        </div>
                        <div className="flex flex-col h-full justify-center text-center text-stone-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Accusamus, facere quam quia porro iusto
                            possimus sapiente eligendi hic dolorem at quidem
                            magnam voluptatem veniam quasi quae voluptatibus
                            vero tempore voluptates.
                        </div>
                    </div>
                    <div className="h-[350px] w-[320px] border border-stone-500 py-10 px-8 transform ease-in hover:translate-y-[-2%] duration-200 hover:border-stone-100 hover:cursor-pointer sm:scale-110">
                        <div className="flex justify-between items-center text-4xl text-start">
                            <div>Title</div>
                            <span className="text-base text-purple-500 hover:underline self-end">
                                <Link href={"/"}>Link</Link>
                            </span>
                        </div>
                        <div className="flex flex-col h-full justify-center text-center text-stone-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Accusamus, facere quam quia porro iusto
                            possimus sapiente eligendi hic dolorem at quidem
                            magnam voluptatem veniam quasi quae voluptatibus
                            vero tempore voluptates.
                        </div>
                    </div>
                    <div className="h-[350px] w-[320px] border border-stone-500 py-10 px-8 transform ease-in hover:translate-y-[-2%] duration-200 hover:border-stone-100 hover:cursor-pointer sm:scale-110">
                        <div className="flex justify-between items-center text-4xl text-start">
                            <div>Title</div>
                            <span className="text-base text-purple-500 hover:underline self-end">
                                <Link href={"/"}>Link</Link>
                            </span>
                        </div>
                        <div className="flex flex-col h-full justify-center text-center text-stone-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Accusamus, facere quam quia porro iusto
                            possimus sapiente eligendi hic dolorem at quidem
                            magnam voluptatem veniam quasi quae voluptatibus
                            vero tempore voluptates.
                        </div>
                    </div>
                    <div className="h-[350px] w-[320px] border border-stone-500 py-10 px-8 transform ease-in hover:translate-y-[-2%] duration-200 hover:border-stone-100 hover:cursor-pointer sm:scale-110">
                        <div className="flex justify-between items-center text-4xl text-start">
                            <div>Title</div>
                            <span className="text-base text-purple-500 hover:underline self-end">
                                <Link href={"/"}>Link</Link>
                            </span>
                        </div>
                        <div className="flex flex-col h-full justify-center text-center text-stone-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Accusamus, facere quam quia porro iusto
                            possimus sapiente eligendi hic dolorem at quidem
                            magnam voluptatem veniam quasi quae voluptatibus
                            vero tempore voluptates.
                        </div>
                    </div>
                    <div className="h-[350px] w-[320px] border border-stone-500 py-10 px-8 transform ease-in hover:translate-y-[-2%] duration-200 hover:border-stone-100 hover:cursor-pointer sm:scale-110">
                        <div className="flex justify-between items-center text-4xl text-start">
                            <div>Title</div>
                            <span className="text-base text-purple-500 hover:underline self-end">
                                <Link href={"/"}>Link</Link>
                            </span>
                        </div>
                        <div className="flex flex-col h-full justify-center text-center text-stone-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Accusamus, facere quam quia porro iusto
                            possimus sapiente eligendi hic dolorem at quidem
                            magnam voluptatem veniam quasi quae voluptatibus
                            vero tempore voluptates.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
