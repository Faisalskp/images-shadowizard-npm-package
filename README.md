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

1)- shadow_type : "high" | "low" (Defaults shadow_type property is low)
2)- padding  :  boolean (Default padding property is false)