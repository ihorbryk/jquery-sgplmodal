## Description

Small jQuery based lib for open modal window.

## Basic usage

```$(document).ready(function(){
    $('body').on('click', '.sgplmodal', function(e) {
        e.preventDefault();
        $.sgplmodal.beforeOpen(function() { console.log('Before open'); });
        $.sgplmodal.open('#modal-one');
    });
});
```

## License

GPL v2
