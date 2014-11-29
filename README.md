[Demo page][1]
==================

A jQuery plugin for consecutive fade and slide animation

# Usage

```html
<div class="consecutive">
	<div id="item" style="background-color:red"></div>
	<div id="item" style="background-color:orange"></div>
	<div id="item" style="background-color:yellow"></div>
	<div id="item" style="background-color:green"></div>
	<div id="item" style="background-color:blue"></div>
</div>

<script type="text/javascript">
	$(".consecutive").consecutive();
</script>
```

# Options

Default options
```javascript
id: '#item',         // id of each element to be animated
animation: 'fade',   // animation type 'fade' or 'slide'
delay: 1000,         // milliseconds between two elements
animationDelay: 500  // milliseconds of the animation
```


[1]: http://mertkahyaoglu.github.io/jquery-consecutive/
