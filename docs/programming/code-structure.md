---
sidebar_position: 2
title: Code structure
---

The firmware consists of the following files/directories:

- `code.py` - The firmware's entry point.
- `welcome.py` - Displays the initial "welcome" screen
- `apps/` - Contains all the apps that you see in the menu (and the menu itself)
- `assets/` - Bitmaps
- `drivers/` - drivers for addons (e.g. floppy and speaker)
- `lib/addons.py` - Addon descriptor library (used by the badge to identify addons)
- `lib/arambadge.py` - The hardware abstraction library for the badge
- `lib/display.py` - Display driver
- `lib/eeprom.py` - EEPROM driver
- `lib/eepromvfs.py` - EEPROM filesystem adapter (used by the Floppy addon)
- `lib/si4703.py` - FM Radio module driver
- `tools` - Some useful functions

The `lib` directory also contains and CircuitPython libraries that we use. They are automatically installed by the [circup package manager](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup), according to the list in requirements.txt.
