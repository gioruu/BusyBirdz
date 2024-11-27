### Prebuild steps

# Remove build and cache directories

rm -rf .vercel
rm -rf .vinxi
rm -rf .output
rm -rf node_modules

# Reinstall dependencies

npm install

# Try building again

npm run build

### Nice to know

if you need to change root folder name (e.g. 'src' or 'app') change the folder parameter inside - tsconfig.json

- tailwind.config.ts
- app.config.ts
