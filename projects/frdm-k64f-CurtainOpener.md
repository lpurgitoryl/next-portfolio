---
title:  frdm-k64f-curtainopener
date: 03-02-2000
repo: frdm-k64f-curtainopener
toolbox:
    - c
---

This project is meant to simulate a single component in a smart home system. I choose to create an automated curtain opener. Other than ease of use, automated curtain openers provide enhanced accessibility for individuals with mobility limitations or disabilities. People who may have difficulty reaching or manipulating the curtains can benefit from the convenience of automated control.
\
\
Using the **FRDM-K64F Development Board**, the system is designed to use the boards' **interrupt and GPIO pins**. The **microphone** connected on the interrupt pin is adjusted via the on board potentiometer. After a snap is detected and the interrupt triggers a mode change, the corresponding control code block will execute. This is where the motor is triggered to use a created **pulley system**. This will be either the opening or closing of the curtians.
\
\
This was an awesome project using a different development toolchain than my normal Arduino and RaspberryPi. Check out my demo video and code repo below!
