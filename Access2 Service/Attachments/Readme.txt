3M Touch Systems, Inc.
TouchWare for Windows

Version 5.64 SR5a, November 2004
Copyright 1991-2004 3M. All rights reserved.

---------------------------------
PRODUCT SUMMARY
---------------------------------
TouchWare for Windows is the software for your 3M Touch Systems touch
screen. It allows you to select, launch, and drag objects using the
touch screen.

TouchWare provides full touch screen functionality for all
applications running under Microsoft Windows XP, Windows 2000, Windows
NT 4.0, Windows Me, and Windows 9X. It uses a true 32-bit
implementation of the driver and control panel to implement touch
screen support.

---------------------------------
FEATURES AND ENHANCEMENTS
---------------------------------
* This version of TouchWare now features 4-point calibration that
  provides better performance for all users.

* Cursor stabilization is now available for serial EX II controllers.

* TouchWare adds to custom touch features with support for external
  speakers. This feature is available only for serial controllers.

---------------------------------
ESCAPE KEY ALTERNATIVES
---------------------------------
Any screen that mentions that it can be closed with the Esc key
now can also be closed with the Delete, Backspace, or Q keys.

---------------------------------
KNOWN ANOMALIES
---------------------------------
* The algorithm for selecting EX II operating frequencies during
  cursor stabilization is flawed. You should select the highest
  available frequency and manually test it. If that frequency does not
  yield satisfactory results, then select the next highest frequency
  and test that. Keep experimenting by using the higher frequencies
  until a suitable one is found.

* Although the drivers appear to operate normally under most
  conditions, 3M Touch Systems does not guarantee operation of its
  drivers under power management situations such as "standby" and
  "hibernation". If you intend to use these options you should
  carefully test your system.

* The keyboard type for Japanese Windows NT systems using PS/2 
  controllers may be reported as an unknown MtsI8042.sys type. To 
  correct this, use the Control Panel to select the proper keyboard
  type. Then uninstall TouchWare, reboot, and reinstall TouchWare. The
  keyboard type should remain whatever you previously selected.

* Occasionally on Windows 98 and Me, the USB installation will not
  work until after a reboot.

* Prior to attaching a USB controller, the TouchWare USB software
  needs to be installed. Occasionally, under Windows 2000, even after
  the USB software is installed, insertion of the USB controller may
  fail to load the driver. If this happens, go to Start>Control Panel>
  System>Hardware>Device Manager. Expand the "Mice and other pointing
  devices" section and select the "MicroTouch Touch Screen USB 
  Controller" entry, which should have a yellow warning indicator over
  its icon. From the "Action" menu, issue the "Uninstall" command. 
  Unplug and reconnect the controller and the driver will be found.

* For installation of the TouchWare PS/2 software under Windows 2000,
  the PS/2 touch screen controller must be connected to the system
  when it was booted.

* When installing the TouchWare PS/2 software under Windows 9x, Me, or
  NT, you must uninstall any existing version of TouchWare and
  disconnect and disable any existing PS/2 mouse drivers and hardware
  prior to installing the new TouchWare. Verify IRQ 12 is not being
  used by the system. Even if the hardware is disconnected, the system
  may still be claiming the IRQ. Note that some styles of laptop mice
  cannot be physically removed, though usually they still can be 
  disabled. 

* TouchWare does not always recognize PS/2 controllers. When this
  happens, the PS/2 driver disables the keyboard. In this case, you
  must uninstall TouchWare to regain the keyboard. This appears to
  happen on some PC's due to BIOS incompatibilities. You should keep
  a serial mouse attached to the system during installation in case
  the keyboard becomes disabled.

* If you uninstall TouchWare, you should restart the system before 
  installing a new version of the software or the new installation 
  might fail. If you attempt to attach a USB device to your system
  after installing TouchWare, you may lose touch functionality during
  installation of that device. You should keep a keyboard or mouse
  attached to the system during USB device installation.

* The setup program does not remove the DOSTOUCH program from the 
  AUTOEXEC.BAT file during a Windows 95 upgrade installation.

* The setup program will only look for the default directories for 
  previous TouchWare versions on the target system when doing a 
  Windows 95 upgrade installation.

* Some older video cards may cause conflicts with COM 4. Refer to 
  Article ID: Q127138 in the Microsoft Technical Support Knowledge 
  base for further information.

* If you are using a ThruGlass controller, you may have difficulty
  making selections at the top or bottom of the screen. To correct the
  problem, select ThruGlass Configuration>Diagnostics>Auto Frequency.

* If you are using a touch pen and must do a "Find Touch Screen" to
  locate the touch pen, the "Pen" tab does not automatically appear in
  the TouchWare control panel applet. Simply exit the applet and
  re-enter it. The "Pen" tab will be present.

* In some multiple monitor situations, dialog boxes will appear on
  the edge of monitors and across several monitors. This is
  unavoidable in many cases. Whenever TouchWare is display a message
  about a particular monitor, that message does appear centered on
  that monitor. When a TouchWare dialog does not pertain to a
  particular monitor and the multiple monitor layout has been defined,
  such a dialog appears centered on the primary monitor.

* TouchWare does not support combinations of single and dual head
  video adapters in the same box. You may have a maximum of 4 single
  head video adapters or you may have up to two dual head video
  adapters, but a mix of different ones is not supported.

* TouchWare supports the concurrent use of one or more serial
  controllers with a PS/2 controller. To install TouchWare on such a
  system, select the "MousePort (PS/2)" installation option. The
  installer then searches all COM ports for serial controllers. This
  search does not test for the PS/2 controller. After the search is
  complete, the installer installs both the serial and PS/2 drivers on
  the system.

* Some of the dual head video adapters tested with TouchWare have
  modes that are incompatible with mirrored (all monitors showing the
  same image) operation in TouchWare. For mirrored operation,
  TouchWare requires these cards report a single, active monitor to
  the system. If the Settings tab on the Display Properties (accessed
  either through the control panel or by right-clicking on the desktop
  and selecting Properties) shows two or more active monitors, you
  need to use the Advanced button to reconfigure your video adapter.
  Some cards show two monitors, one large and one small, with the
  small one being disabled. This configuration works with TouchWare
  since the video adapter appears as only one active monitor. See your
  video adapter documentation for instructions on configuring your
  card.

* The serial control panel is not be able to display all fonts
  properly on some systems. This is most notable with some Asian
  language fonts, where the fonts are too large. The text in the
  control panel will not be properly presented. The USB control panel
  does handle these fonts correctly.

---------------------------------
HARDWARE SUPPORT
---------------------------------
This version of TouchWare supports dual-head video cards multiple 
monitor configurations for serial and USB systems. The hardware 
listed below has been tested as of this release. 

Dual Head Video Cards
  - Matrox Millennium G400 
  - Asus GeForce2 MX Dual head
  - Matrox Millennium G450
  - ATI Radeon VE Dual Monitor
  - Appian Gemini Dual Monitor

COM port expansion cards
  - Addonics FlexPort (4 plus 2) ISA interface
  - Digi Board Classic ISA interface (not for Windows 98)
  - Digi Accelport Models 2E and 4E ISA interface (not for Windows 98)
  - SIIG I/O Expander 25 model 101812 ISA interface
  - Comtrol RocketPort 4-port PCI interface
  - Equinox Super Serial PCI interface
___________________________________________________________

MicroTouch and the MicroTouch logo are either registered
trademarks or trademarks of 3M in the United States and/or
other countries.

Microsoft, MS-DOS, Windows, and Windows NT are registered
trademarks or trademarks of Microsoft Corporation.
___________________________________________________________
