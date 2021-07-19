For reload the server automatically when a file is change, run this in the command line:

    nodemon src/app.js -e js,hb

For generate a ssh key, run this in the command line:

    ssh-keygen -t rsa -b 4096 -C "your@email.com"
    ls -a -l ~/.ssh
    eval "$(ssh-agent -s)"