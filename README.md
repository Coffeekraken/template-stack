# Coffeekraken Template Stack <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!--<a href="https://travis-ci.org/coffeekraken/template-stack">
		<img src="https://img.shields.io/travis/coffeekraken/template-stack.svg?style=flat-square" />
	</a>-->
	<!--<a href="https://www.npmjs.com/package/coffeekraken-template-stack">
		<img src="https://img.shields.io/npm/v/coffeekraken-template-stack.svg?style=flat-square" />
	</a>-->
	<!--<a href="https://github.com/coffeekraken/template-stack/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-template-stack.svg?style=flat-square" />
	</a>-->
	<!-- <a href="https://github.com/coffeekraken/template-stack">
		<img src="https://img.shields.io/npm/dt/coffeekraken-template-stack.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/template-stack">
		<img src="https://img.shields.io/github/forks/coffeekraken/template-stack.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/template-stack">
		<img src="https://img.shields.io/github/stars/coffeekraken/template-stack.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

Provide some nice features like a \"spotlight\" like page switcher (ctrl+p) and some cool stuff that will be added later.
This package is for now in experimental mode so use it with caution.

## Table of content

1. [Install](#readme-install)
2. [Get Started](#readme-get-started)
3. [Contribute](#readme-contribute)
4. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
5. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install git+https://git@github.com/Coffeekraken/template-stack.git#0.0.1 --save-dev
```

<a name="readme-get-started"></a>
## Get Started

Import the `TemplateStack` class inside your js file.
We strongly recommand you to make a different file only for this. You certainly don't want to have the template stack features on your final website.

```js
import TemplateStack from 'coffeekraken-template-stack';
new TemplateStack({
	pages: {
		'home': {
			'title': 'Homepage',
			'url': '/'
		}
	}
});
```

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
