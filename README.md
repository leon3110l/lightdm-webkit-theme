# lightdm-webkit-theme
an lightdm-webkit2-greeter theme

![screenshot]("./img/screenshot.png")

## installation
```console
$ git clone https://github.com/leon-4A6C/lightdm-webkit-theme
$ cd lightdm-webkit-theme
$ chmod +x build.sh
$ sudo ./build.sh
```
### enable the theme
```console
$ # enable it in the config
$ sudo nano /etc/lightdm/lightdm-webkit2-greeter.conf
```
set ``webkit_theme`` to ``lightdm-webkit-theme``
