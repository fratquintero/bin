#! /usr/bin/bash

var=$(echo -e "RCN\nVOA\nNews" | dmenu -i -p "Select Station")

case $var in
	RCN) mpv https://zeno.fm/radio/rcn-radioxybwqhc9ewzuv/ ;;
	VOA) mpv https://www.voanews.com/live/audio/60 ;;
	News) mpv https://zeno.fm/radio/newsradio-100/ ;;
	*) echo "No radiostation with such a name: $var"
esac
