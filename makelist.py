import os

def p(s):
    print(s, end='')

os.chdir('public/Life')
dirs = os.listdir()
p('let list = [')
for d in dirs:
    os.chdir(d)
    p('("')
    p(d)
    p('",[')
    for f in os.listdir():
        p('"')
        p(f)
        p('";')
    p(']);')
    os.chdir('..')
p(']')
