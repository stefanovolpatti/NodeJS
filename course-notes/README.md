To install Mongo DB locally on your Mac, ypu have to go to: https://www.mongodb.com/try/download/community

Once you download the file, open you Finder and rename the package to "mongodb".
Drop the package into your user directory folder. You can use the following command to go directly to your domain folder:

    cd ~

In the same folder, create a folder called "mongodb-data".
Make sure that you have open your project folder in your editor and from the terminal, type:

    /Users/"yourpath"/mongodb/bin/mongod --dbpath=/Users/"yourpath"/mongodb-data

The mongodb server will start!