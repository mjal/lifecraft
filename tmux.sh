#!/bin/sh

tmux start-server

tmux new-session -d -s lifecraft

tmux selectp -t 1 
tmux send-keys "vim src/main.ml +NERDTreeToggle" C-m 

# Split pane 1 horizontal by 65%, start redis-server
tmux splitw -v -p 30
tmux send-keys "bsb -w" C-m
tmux splitw -h -p 20
tmux send-keys "yarn watch-bundle" C-m
tmux splitw -h -p 40
tmux send-keys "python server.py" C-m

tmux selectp -t 1

tmux attach-session -t lifecraft
