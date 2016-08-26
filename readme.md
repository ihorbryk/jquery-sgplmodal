## Description

Small jquery based library for work with modal window

## Basic usage

```$(document).ready(function(){
    $('body').on('click', '.sgplmodal', function(e) {
        e.preventDefault();
        $.sgplmodal.beforeOpen(function() { console.log('Before open'); });
        $.sgplmodal.open('#modal-one');
    });
```

## Options

Option    | Value | Description
:-------- | ----- | -------------------------------------------
maxWidth | int | Set max-width of modal window. Default is 330

`$.sgplmodal.maxWidth = 400;`

## Methods


