const { exec } = require('child_process');

const os_1 = require('os');
console.log('RRRR: ', os_1.tmpdir());

// console.log(`json-server-auth db.json --port ${process.env.PORT || 5000}`);

// exec(
//   `json-server-auth db.json --port ${process.env.PORT || 5000}`,
//   (error, stdout, stderr) => {
//     if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//   }
// );
