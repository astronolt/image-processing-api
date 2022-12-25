# Image Processing API
***
an API that can be used to serve properly scaled versions of images to reduce page load size. The API will handle resizing, formating and serving stored images based on URL parameters.

<br>
<br>
<br>


## Introduction
***
The goal of this project is to provide the building blocks for an enterprise-level solution that can handle hundreds of images with multiple thumbnail sizes, such as for an eCommerce application.

With best practices for creating scalable, maintainable code using TypeScript, unit testing, linting, and formatting to ensure a scalable, maintainable, less error-prone, and easy to read application.


<br>
<br>
<br>

## Installation
***
```
$ npm install
$ npm start
```
Note: you can also run the app by using the node command: ``node build/index.js`` 

<br>

### Testing
```
$ npm test
```


<br>
<br>
<br>




## How to use
***
To use this project, follow these steps:

1. Drop an image into the `full` folder within the `assets` directory.
2. Visit the endpoint `(http://localhost:3000/api/images)` in your browser. Enter the image name, width, and any optional parameters (height, extension, and processing style).
3. The processed image will be displayed in the browser and saved in the `thumbs` folder.
4. Note: When the page is reloaded, the previously processed image will be served to the client instead of being reprocessed.

<br>

### API Endpoints
/api/images

#### basic example
(http://localhost:3000/api/images/?filename=fjord&width=300)


#### Query parameters

- `filename`: Name of the image file
- `width`: Width parameter
- `height`: Height parameter (optional)
- `style`: Colour manipulation scheme (optional: `tint`, `greyscale`)
- `ext`: Extention parameter for other image formats than JPG (optional) (default: `jpg`)