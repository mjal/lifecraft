#!/bin/sh

tmux start-server

tmux new-session -d -s lifecraft

tmux selectp -t 1 
#tmux send-keys "vim src/main.ml +NERDTreeToggle" C-m 
tmux splitw -v -p 10
tmux send-keys "bsb -w" C-m
tmux splitw -h -p 20
tmux send-keys "yarn watch-bundle" C-m
tmux splitw -h -p 40
tmux send-keys "python server.py" C-m

tmux selectp -t 1

tmux attach-session -t lifecraft
