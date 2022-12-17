import fs from "fs";
import find from "./service/findFiles.js";
import read from "./service/readFile.js";
import { homedir } from "os";

const Desktops = `${homedir}/Desktop/`;
const OneDrive = `${homedir}/OneDrive/`;
const OneDriveDesktops = `${homedir}/OneDrive/Desktop/`;

const DesktopFileExists = find(Desktops, "WITH-LOVE-FROM-THE-FREE-WORLD.txt");
const OneDriveDesktopFileExists = find(
  OneDriveDesktops,
  "WITH-LOVE-FROM-THE-FREE-WORLD.txt"
);
const OneDriveFileExists = find(OneDrive, "WITH-LOVE-FROM-THE-FREE-WORLD.txt");

function deliverAPeacefulMessage(path, message) {
  console.log(path);
  try {
    fs.writeFile(path, message, function (err) {
      //its all good
    });
  } catch (err) {
    //thats ok
  }
}

//let's be polite and only do this once.
//hopefully once is all it takes.
if (
  !DesktopFileExists?.length &&
  !OneDriveFileExists?.length &&
  !OneDriveDesktopFileExists?.length
) {
  console.log("in here");

  const thinkaboutit = "WITH-LOVE-FROM-THE-FREE-WORLD.txt";

  const WITH_LOVE_FROM_THE_FREE_WORLD = read(`./${thinkaboutit}`);

  deliverAPeacefulMessage(
    `${Desktops}${thinkaboutit}`,
    WITH_LOVE_FROM_THE_FREE_WORLD
  );
  deliverAPeacefulMessage(
    `${OneDriveDesktops}${thinkaboutit}`,
    WITH_LOVE_FROM_THE_FREE_WORLD
  );
  deliverAPeacefulMessage(
    `${OneDrive}${thinkaboutit}`,
    WITH_LOVE_FROM_THE_FREE_WORLD
  );
}

const whatWeWant = "♥";

export { whatWeWant as default, whatWeWant };
