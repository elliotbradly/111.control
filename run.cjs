const path = require('path');

var init = async () => {

  const aedes = require("aedes")();
  const server = require("net").createServer(aedes.handle);
  const port = 1123;

  server.listen(port, function () {
    console.log("server started and listening on port ", port);

    var exec  = require('child_process').exec;

    exec('tsc -b 002.space', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        open(port)

        })
  });

};

var bit;


var open = async (prt) => {

  //PIVOT = require(path.resolve('../999.pivot/dist/999.pivot/hunt'));
  //PIVOT_ACTION = require(path.resolve('../999.pivot/dist/999.pivot/00.pivot.unit/pivot.action'));

  TERMINAL = require(path.resolve('./997.terminal/index'));
  TERMINAL_ACTION = require(path.resolve('./997.terminal/00.terminal.unit/terminal.action'));

  CONTROL = require(path.resolve('./dist/111.control/hunt'));
  CONTROL_ACTION = require(path.resolve('./dist/111.control/00.control.unit/control.action'));

  const MQTT = require("async-mqtt");

  var title = command_line();

  var local = 'mqtt://localhost:' + prt;
  var localBit = { idx: 'local', src: local }
  var remoteBit = { idx: 'remote', src: 'ws://gatorsocket.herokuapp.com/' }

  //bit = await PIVOT.hunt( PIVOT_ACTION.INIT_PIVOT, { dat: MQTT, src: local });
  bit = await TERMINAL.hunt( TERMINAL_ACTION.INIT_TERMINAL, { dat: MQTT, src: local });
  //bit = await SPACE.hunt(SPACE.ActSpc.INIT_SPACE, { val: 1, dat: MQTT, src:  [localBit, remoteBit] });
  bit = await CONTROL.hunt( CONTROL_ACTION.INIT_CONTROL, { val: 1, dat: MQTT, src:  [localBit] });

}

var command_line = () => {
  var idx;
  const { program } = require("commander");
  program.option("--first").option("-t, --separator <char>");
  program.parse(process.argv);
  const options = program.opts();
  if (options["separator"] != null) idx = options["separator"];
  return idx;
};


process.nextTick(init)
