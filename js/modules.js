// q1

// file1.js
// console.log('file1.js');
// module.exports = {};

// file2.mjs
// console.log('file2.mjs');
// export default {};

// file3.mjs
// await new Promise((res) => setTimeout(() => res(), 0));
// console.log('/file3.mjs');
// export default {};

// file4.mjs
// console.log('file4.mjs');
// export default {};

// file4.mjs
// console.log('file5.js');
// export default {};

import { createRequire } from 'module';
import './file2.mjs';
import './file3.mjs';
// import('./file3.mjs');
const require = createRequire(import.meta.url);

require('./file1.js');

function getModule() {
	import('./file4.mjs');
	require('./file5.js');
}

getModule();
