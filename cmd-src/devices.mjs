import {Bash} from "node-bash"


const adb_devices = async () => {
    const sh = new Bash({
      debug: false,
      executableOptions: {
        '--noprofile': true,
      },
    });
    
    try {
        
      let adbDevicesCmd = await sh.invoke('adb devices');
      let AdbDevicesListe = []
      adbDevicesCmd = adbDevicesCmd.raw.substring(25)
      adbDevicesCmd =adbDevicesCmd.split('\n')
      adbDevicesCmd.forEach(element => {
        
        AdbDevicesListe.push({
            name: element.replace('\t', ' ').split(' ')[0],
            status: element.replace('\t', ' ').split(' ')[1]
            
        })
      });
    


        return AdbDevicesListe

    } catch (error) {

    } finally {
      await sh.dispose();
    }
};

export default adb_devices