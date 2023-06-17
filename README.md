# Newsletter Card
This is a FrontEnd Mentor project

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Specifically:

```
> npm create-react-app news-letter --template typescript
```

## Additional NPM installs:

This project requires the following additional npm install:

```
> npm install sass
```

## General Architectural layout:

This project contains the following components:

	- src
		index.tsx //The primary react-app standard starting code and creates a flex-box to center the main UI
		App.tsx //Sets up, and contains the initial ParentFrame components 

		- Components
			ParentFrame //The primary container which holds the two Components: <ComponentsContainerFrame> more specifically

			ComponentsContainerFrame //One holds the image, the other holds the frame for all the marketing text and email input. 			

			MarketingMaterialFrame and MarketingImageFrame: The marketing information in the two <ComponentsContainerFrame>
			
			Popup component  //This is just the popup when the user submitts their email.

### Logic of the architecture

	Have the components which need to be worked through to iron out the layout isolated from the content.

	Then, have the components which display data isolated from issues with the overall layout of the primary page.

	Though this architecture and the number of components may seem overkill for this project, I want to start designing 
	as if the project were larger.  Not certain this is the right concept at this point or not.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
