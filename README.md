Components

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep

- npm init -y (to create package.json in the tokens folder(change the "name" attribute to '@ignite-ui/tokens', the name of the organization first is a good practice))
- npm i -D typescript (installing typescript will create the 'package-lock.json' file and node_modules folder)
- npx tsc --init (will the tsconfig.json)


## Packages installed

- npm i tsup -D (to convert this project into a javascript package that can be added to other projects(the built in conversion is limited))
- npm i turbo@latest -D (TurboRepo, will run all "dev" scripts in parallel)

# ./docs

- npx sb init --builder @storybook/builder-vite --type react (storybook documentation)
- npm i vite @vitejs/plugin-react -D
- npm i react react-dom
- npm i polished (for working with colors)
- npm i phosphor-react (icons)
- npm install -D @storybook/addon-a11y@7.6.10 (accessibility addon)

# ./react

- npm i -D react @types/react @types/react-dom (react, -D as development dependency)
- npm i @stitches/react
- npm install @radix-ui/react-avatar
- npm i phosphor-react (icons)
- npm install @radix-ui/react-checkbox