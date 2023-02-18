import {Bash} from "node-bash"


const adb_startServer = async () => {
    const sh = new Bash({
      debug: false,
      executableOptions: {
        '--noprofile': true,
      },
    });
    
    try {
        console.log("start-server")
      
        await sh.invoke('adb start-server')
     
        return "success"

    } catch (error) {

    } finally {
      await sh.dispose();
    }
};

export default adb_startServer