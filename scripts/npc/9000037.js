/*
	NPC Name: 		Agent Kitty
	Map(s): 		Special Training Camp for Agent (970030000)
	Description: 		Agent event Starter
*/

function start() {
    if (cm.getMapId() == 970030000) {
	cm.start_DojoAgent(false, false);
	cm.dispose();
    } else if (cm.getMapId() == 910000000) {
	cm.sendYesNo("你想去特别的训练营吗?")
	type = 1;
    } else {
	cm.sendYesNo("你现在想出去吗?");
	type = 2;
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(970030000, 0);
    }
    cm.dispose();
}