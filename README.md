# clone

Clone an ImageData

## install

`npm install @rgba-image/clone`

## usage

```js
const { clone } = require( '@rgba-image/clone' )

// get some image...

const cloned = clone( image )

// cloned is an exact copy of image; operations on cloned do not affect image
```

Uses [create-image](https://github.com/rgba-image/create-image) to create the
clone - there is a `CloneFactory` that allows you to create an instance of
`clone` using a different `createImage`, such as
[create-image-browser](https://github.com/rgba-image/create-image-browser):

```js
const { createImage } = require( '@rgba-image/create-image-browser' )
const { CloneFactory } = require( '@rgba-image/clone' )

const clone = CloneFactory( createImage )

// get some image...

const cloned = clone( image )
```

## License

MIT License

Copyright (c) 2018 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.