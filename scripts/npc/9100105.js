/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3
as published by the Free Software Foundation. You may not use, modify
or distribute this program under any other version of the
GNU Affero General Public License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
@	Author: Santa / DestinyMS
@	Name: GMS-like Gachapon
	Mushroom Shrine
 */

var status = 0;

var prizes = new Array(1041053, 1061049, 1041038, 1041086, 1060000, 1061085, 1060052, 1002214, 1060016, 1102004,
					   1002587, 1060016, 1102004, 1002587, 1312014, 1060033, 1002120, 1041029, 1072262, 1322021,
					   1302026, 1472015, 1050002, 1051015, 1061054, 1442017, 1061094, 1082147, 1102043, 1002392,
					   1082149, 1402017, 1050056, 1051006, 1002180, 1051030, 1050049, 1050029, 1051010, 1002154,
					   1002165, 1002249, 1060064, 1051065, 1051026, 1060024, 1040080, 1061082, 1002136, 1051055,
					   1040100, 1002246, 1041076, 1041089, 1472021, 1050039, 1060044, 1332054, 1382037, 1102078,
					   4001021, 1322027, 1002391, 1312013, 1002394, 1322001, 1372008, 1442004, 1402013, 1382008,
					   1332053, 1322017, 1002022, 1102041, 1002393, 1432013, 1102042, 1002395, 1002586, 1082148,
					   1432015, 1082146, 1432004, 1472054, 1060044, 1072264, 1040058, 1032012, 1092004, 1422008,
					   1422003, 1060078, 1452007, 1102040, 1072239, 1082145, 2022180, 2022182, 2020012, 2022015,
					   2043105, 2043104, 2043205, 2043204, 2043018, 2043005, 2043004, 2043007, 2043006, 2044105,
					   2044104, 2044205, 2044204, 2044005, 2044004, 2040605, 2040604, 2040611, 2040610, 2040609,
					   2040608, 2040607, 2040606, 2044505, 2044504, 2041039, 2041038, 2041031, 2041030, 2041037,
					   2041036, 2041041, 2041040, 2041033, 2041032, 2041035, 2041034, 2044705, 2044704, 2044605,
					   2044604, 2043305, 2043304, 2040309, 2040308, 2040307, 2040306, 2040327, 2040325, 2040305,
					   2040304, 2040322, 2040200, 2040204, 2040201, 2040203, 2040205, 2040206, 2040105, 2040108,
					   2040106, 2040109, 2040100, 2040103, 2040101, 2040104, 2040811, 2040810, 2040809, 2040808,
					   2040813, 2040812, 2040815, 2040814, 2040030, 2040028, 2040015, 2040014, 2040009, 2040008,
					   2040005, 2040011, 2040004, 2040010, 2040012, 2040011, 2040511, 2040510, 2040509, 2040508,
					   2040519, 2040518, 2040517, 2040516, 2044411, 2044405, 2044404, 2040917, 2040916, 2040905,
					   2040904, 2040909, 2040908, 2040907, 2040906, 2040922, 2040921, 2040932, 2040930, 2040713,
					   2040712, 2040715, 2040717, 2040716, 2044305, 2044304, 2040727, 2043805, 2043804, 2040405,
					   2040404, 2040409, 2040408, 2040411, 2040410, 2040407, 2040406, 2043705, 2043704, 2002017,
					   1012106, 1012107, 1092022); 
var prizes1 = Math.floor(Math.random()*(prizes.length+1));

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 1 && mode == 0) {
			cm.sendOk("See you next time.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.haveItem(5220000)) {
				cm.sendYesNo("You have some #bGachapon Tickets#k there.\r\nWould you like to try your luck?");
			} else {
				cm.sendOk("Here is #bGachapon#k.");
				cm.dispose();
			}
		} else if (status == 1 && mode == 1) {
			var win = prizes[prizes1];
			if (cm.canHold(win)) {
				cm.gainItem(5220000, -1);
				if (win >= 1000000 && win <= 1999999) {
					cm.gainItem(win, 1, true);
				} else {
					cm.gainItem(win, 1);
				}
				cm.sendOk("Ka-thump! An item dropped out of #rGachapon#k.");
			} else {
				cm.sendNext("Your Equip, Use, Setup or Etc. inventories seem to be full... please check them and try again.");
			}
			cm.dispose();
		} else {
			cm.sendOk("See you next time.");
			cm.dispose();
		}
	}
}