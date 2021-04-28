# what is this?

Get perfect shadows every time for all images.

# Installation 

`npm i shadowImages --save`

Then...

```
import { shadowImages } from 'shadowImages';

shadowImages({
    shadow_type: 'low',
    padding: false
});

```

## Properties

shadowImages supports two(2) properties, which are optional:

* *shadow_type* - _high | low_ (Defaults shadow_type property is low)
* *padding* - _boolean_ (Default padding property is false)