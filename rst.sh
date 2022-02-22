#! /usr/bin/bash

var=$(echo -e "Caracol\nVOA\nNews" | dmenu -i -p "Select Station")

case $var in
	Caracol) mpv https://zeno.fm/radio/radiocaracolbogota/ ;;
	VOA) mpv https://www.voanews.com/live/audio/60 ;;
	News) mpv https://zeno.fm/radio/newsradio-100/ ;;
	*) echo "No radiostation with such a name: $var"
esac
