---
sidebar_position: 1
title: Floppy Diskette Addon
---

# The Floppy

Each floppy contains 64kb of storage on a single I2C EEPROM chip. 

## Code Snippets

Format a floppy (64kb):

```python
from tools.initfloppy import initfloppy
initfloppy('ARAM_FLOPPY')
```
