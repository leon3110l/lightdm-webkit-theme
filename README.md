# lightdm-webkit-theme
an lightdm-webkit2-greeter theme

![screenshot](https://user-images.githubusercontent.com/23241713/29030435-43b85b4a-7b8b-11e7-815f-9c178f32fdcd.png)

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
set `webkit_theme` to `lightdm-webkit-theme`
