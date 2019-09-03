/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/* Controls the Texas Seal spinner when user scrolls */
// Init ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Build tween for outer
var tweenOuter = TweenMax.fromTo(".texas-seal", 1, {rotation: -70},{rotation: 360, ease: Linear.easeNone});

// build scene for outer
var scene = new ScrollMagic.Scene({
		duration: 4000,
		offset: 2400
	})
	.setTween(tweenOuter)
	.addTo(controller);