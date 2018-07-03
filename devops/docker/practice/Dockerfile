# Official Python runtime as parent image
FROM node:carbon

# Set the working directory as /app
WORKDIR /usr/src/app

# Add the contents from working directory inside the docker image at /app
ADD . /usr/src/app

# Install any dependencies from requirements.txt
# RUN npm install

# Expose port 80 from the app inside the container
EXPOSE 8080

ENV NAME world

CMD ["node", "app.js"]
