

# multi-stage docker file for a nodejs app to reduce the final image size
# First stage: build the app
FROM node:20.9.0-alpine3.18 AS build
WORKDIR /app
COPY package*.json ./
# npm ci would use the package-lock.json. Since wwe use the docker image cache, the npm cache is not needed
RUN npm ci --only=production && npm cache clean --force
COPY . .
# check package.json to see if it has any "build" script to be executed, otherwise exclude it
# RUN npm run build 

# Second stage: copy the app and run it as a non-root user
FROM node:20.9.0-alpine3.18 AS release
WORKDIR /app
# exclude below if they are not part of outDir
# COPY --from=build /app/dist ./dist 
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/*.js ./
# Create a user and group with no privileges
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# Change the ownership of the app files to the new user and group
RUN chown -R appuser:appgroup /app
# Switch to the new user
USER appuser
EXPOSE 3000
# it should call the nodejs app directly, as npm scripts at package.json (like "npm start") won't pass the OS SIGTERM signal to processes
CMD ["node", "/app/app.js"]