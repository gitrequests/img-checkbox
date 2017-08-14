## Img-checkbox
Img-checkbox is a jQuery-based replacement for input checkboxes. It supports image, fontawesome, and custom content as input.

## Usage

**Include jQuery**

```<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>```


**Include img-checkbox**

```<script src="../src/jquery.imgcheckbox.min.js"></script>```

**For use animation include imgcheckbox.css**

```<link href="../src/animation.imgcheckbox.min.css" rel="stylesheet">```

**Add figure component**

```html
<figure>
    <div class="figure-content"><img src="img/Delete.png"></div>
    <figcaption><img src="holder.js/50x50"></figcaption>
    <label><input type="checkbox" name="name"> Label</label>
</figure>
```

**Activate plugin with default options**

```js
$('figure').imgCheckbox()
```

**Or activate plugin with some options**

```js
$('figure').imgCheckbox({
	width: 'auto',
	height: 'auto',
	textColor: 'white',
	overlayBgColor: 'black',
	overlayOpacity: '0.4',
	round: true,
	animation: true,
	animationDuration: 300,
})
```
