# latest.land
proxy for nest.land to support importing latest version as url

instead of
```ts
import {hello} from 'https://x.nest.land/hello-world@0.0.1/mod.ts'
```

use

```ts
import {hello} from 'https://latest.land.danielr1996.de/x/hello-world/mod.ts'
```

to always obtain the latest version.