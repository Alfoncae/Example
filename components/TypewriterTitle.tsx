"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterTitle = () => {
    return (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString("The place you wanna be.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("And yea that's it.")
                    .start();
            }}
        />
    );
};

export default TypewriterTitle;
