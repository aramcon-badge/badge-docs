---
sidebar_position: 2
title: Code structure
---

The firmware consists of the following files/directories:

- [code.py](https://github.com/aramcon-badge/aramcon-firmware/blob/master/code.py) - The firmware's entry point.
- [welcome.py](https://github.com/aramcon-badge/aramcon-firmware/blob/master/welcome.py) - Displays the initial "welcome" screen
- [apps/](https://github.com/aramcon-badge/aramcon-firmware/tree/master/apps) - Contains all the apps that you see in the menu (and the menu itself)
- [assets/](https://github.com/aramcon-badge/aramcon-firmware/tree/master/assets) - Bitmaps
- [drivers/](https://github.com/aramcon-badge/aramcon-firmware/tree/master/drivers) - drivers for addons (e.g. floppy and speaker)
- [lib/addons.py](https://github.com/aramcon-badge/aramcon-firmware/blob/master/lib/addons.py) - Addon descriptor library (used by the badge to identify addons)
- [lib/arambadge.py](https://github.com/aramcon-badge/aramcon-firmware/blob/master/lib/arambadge.py) - The hardware abstraction library for the badge
- [lib/display.py](https://github.com/aramcon-badge/aramcon-firmware/blob/master/lib/display.py) - Display driver
- [lib/eeprom.py](https://github.com/aramcon-badge/aramcon-firmware/blob/master/lib/eeprom.py) - EEPROM driver
- [lib/eepromvfs.py](https://github.com/aramcon-badge/aramcon-firmware/blob/master/lib/eepromvfs.py) - EEPROM filesystem adapter (used by the Floppy addon)
- [lib/si4703.py](https://github.com/aramcon-badge/aramcon-firmware/blob/master/lib/si4703.py) - FM Radio module driver
- [tools](https://github.com/aramcon-badge/aramcon-firmware/tree/master/tools) - Some useful functions

The [lib](https://github.com/aramcon-badge/aramcon-firmware/tree/master/lib) directory also contains and CircuitPython libraries that we use. They are automatically installed by the [circup package manager](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup), according to the list in [requirements.txt](https://github.com/aramcon-badge/aramcon-firmware/blob/master/requirements.txt).
