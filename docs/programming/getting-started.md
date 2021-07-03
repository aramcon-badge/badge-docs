---
sidebar_position: 1
title: Getting started
---

## Prerequisites

You'll need Python 3.6 or higher and the [circup package manager](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup).

Install circup by running:

```
pip install circup
```

:::caution
Depending on your system configuration, you may need to use `pip3` instead of `pip`.
:::

## Getting the code

Clone the firmware repo to your computer:

```
git clone https://github.com/aramcon-badge/aramcon-firmware
```

Then, connect your badge to your computer. It should appear as a usb drive. Update your badge's CircuitPython libraries with circup:

```
cd aramcon-firmware
circup install -r requirements.txt
```

Then copy the files from the cloned repository into the badge. You can skip the `.git` directory.

## Editing the code

The recommended code editor is [Visual Studio Code](https://code.visualstudio.com/).

You can edit the code directly on the badge drive. Whenever you make a change, the firmware will automatically restart so you can see your changes immediately.

Open the [serial console](../badge/repl) to see the debug prints of your code. If the code doesn't run automatically when you save a file, you may need to go to the REPL and press Ctrl-D to soft-restart the firmware.
