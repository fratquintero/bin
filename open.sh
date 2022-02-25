#! /usr/bin/bash

echo "PLEASE, look at the top-bar and select the app you want to run"
var=$(echo -e "mpv\nfeh\nMuPDF\nw3m" | dmenu -i -p "Select: ")

case $var in
	mpv) mpv -quiet $1 2&>/dev/null & disown ;;
	feh) feh $1 2&>/dev/null & disown ;;
	MuPDF) mupdf $1 ;;
	w3m) w3m $1 ;;
esac
