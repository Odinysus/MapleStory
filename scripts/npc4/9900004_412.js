/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */
importPackage(net.sf.cherry.client);
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
var dds;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果需要点卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
                 // cm.getChar().gainCashDD(+1000);
            var gsjb = "你好，这里可以合成160级套服。\r\n";
            gsjb += "#L1##v1052882##z1052882##l\r\n";
            gsjb += "#L2##v1052887##z1052887##l\r\n";
            gsjb += "#L3##v1052888##z1052888##l\r\n";
            gsjb += "#L4##v1052889##z1052889##l\r\n";
            gsjb += "#L5##v1052890##z1052890##l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 0) {
                 if (cm.haveItem(4004004) == 0) {
                    cm.sendNext("您的货币不足兑换.");
                    status = -1;
                } else {
                    beauty = 0
                    cm.sendGetNumber("合成一个#v4005004#需要10个#v4004004#\r\n请输入[#r黑暗水晶母矿#k]的数量:\r\n当前: #r #c4004004# 个 \r\n", 1, 1, 100000 );

                }

            
            }else if (selection == 1) {
                    if (1<0) {
                    cm.sendNext("您的货币不足兑换.");
                    status = -1;
                } else {
                    beauty = 1
                    cm.sendGetNumber("合成需要材料如下：\r\n#v4250802##z4250802#×5\r\n#v4031217##z4031217#×1\r\n#v1052498##z1052498#×1\r\n#v1122000##z1122000#×1\r\n#v4000463#货币 × 100\r\n#v4251002#幸运 × 5\r\n#v4251202#五彩 × 2\r\n#v4251402#黑暗 × 5\r\n#v4250902#智慧 × 5\r\n #v4031138#金币：100000000\r\n请输入要合成的数量:\r\n", 1, 1, 1 );

                }

            }else if (selection == 2) {
                    if (1<0) {
                    cm.sendNext("您的货币不足兑换.");
                    status = -1;
                } else {
                    beauty = 2
                    cm.sendGetNumber("合成需要材料如下：\r\n#v4250802##z4250802#×5\r\n#v4031217##z4031217#×1\r\n#v1052498##z1052498#×1\r\n#v1122000##z1122000#×1\r\n#v4000463#货币 × 100\r\n#v4251002#幸运 × 5\r\n#v4251202#五彩 × 2\r\n#v4251402#黑暗 × 5\r\n#v4250902#智慧 × 5\r\n #v4031138#金币：100000000\r\n请输入要合成的数量:\r\n", 1, 1, 1 );

                }

            }else if (selection == 3) {
                    if (1<0) {
                    cm.sendNext("您的货币不足兑换.");
                    status = -1;
                } else {
                    beauty = 3
                    cm.sendGetNumber("合成需要材料如下：\r\n#v4250802##z4250802#×5\r\n#v4031217##z4031217#×1\r\n#v1052498##z1052498#×1\r\n#v1122000##z1122000#×1\r\n#v4000463#货币 × 100\r\n#v4251002#幸运 × 5\r\n#v4251202#五彩 × 2\r\n#v4251402#黑暗 × 5\r\n#v4250902#智慧 × 5\r\n #v4031138#金币：100000000\r\n请输入要合成的数量:\r\n", 1, 1, 1 );

                }

            }else if (selection == 4) {
                    if (1<0) {
                    cm.sendNext("您的货币不足兑换.");
                    status = -1;
                } else {
                    beauty = 4
                    cm.sendGetNumber("合成需要材料如下：\r\n#v4250802##z4250802#×5\r\n#v4031217##z4031217#×1\r\n#v1052498##z1052498#×1\r\n#v1122000##z1122000#×1\r\n#v4000463#货币 × 100\r\n#v4251002#幸运 × 5\r\n#v4251202#五彩 × 2\r\n#v4251402#黑暗 × 5\r\n#v4250902#智慧 × 5\r\n #v4031138#金币：100000000\r\n请输入要合成的数量:\r\n", 1, 1, 1 );

                }

            }else if (selection == 5) {
                    if (1<0) {
                    cm.sendNext("您的货币不足兑换.");
                    status = -1;
                } else {
                    beauty = 5
                    cm.sendGetNumber("合成需要材料如下：\r\n#v4250802##z4250802#×5\r\n#v4031217##z4031217#×1\r\n#v1052498##z1052498#×1\r\n#v1122000##z1122000#×1\r\n#v4000463#货币 × 100\r\n#v4251002#幸运 × 5\r\n#v4251202#五彩 × 2\r\n#v4251402#黑暗 × 5\r\n#v4250902#智慧 × 5\r\n #v4031138#金币：100000000\r\n请输入要合成的数量:\r\n", 1, 1, 1 );

                }

            }
               


			
			
			
			
			
        } else if (status == 2) {
            if (beauty == 0) {
               if (cm.haveItem(4004004, selection*10)&&cm.haveItem(4001126, selection*10)){
					 cm.gainItem(4004004, -selection*10);
                    cm.sendNext("合成物品成功！");
                   // cm.gainNX(+1000 * selection);
					cm.gainItem(4005004, selection);
					 cm.dispose();
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }else if (beauty == 1) {
                 if (cm.haveItem(4250802, selection*5) && cm.haveItem(1122000, selection)&& cm.haveItem(4000463, selection*100)&& cm.haveItem(4251002, selection*5)&& cm.haveItem(4251202, selection*2)&& cm.haveItem(4251402, selection*5)&& cm.haveItem(4250902, selection*5) &&cm.haveItem(4031217, selection) &&cm.haveItem(1052498, selection) && cm.getPlayer().getMeso() >selection*100000000){
					 cm.gainItem(4250802, -selection*5);
					 cm.gainItem(4251002, -selection*5)
					 cm.gainItem(4251402, -selection*5)
					 cm.gainItem(4250902, -selection*5)
					 cm.gainItem(4251202, -selection*2)
					 cm.gainItem(4031217, -selection);
					 cm.gainItem(4000463, -selection*100);
					 cm.gainItem(1052498, -selection);
					 cm.gainItem(1122000, -selection);
					cm.gainMeso(-100000000* selection); //加减金币
					cm.gainItem(1052882, selection);
                    cm.sendNext("合成物品成功！");
					cm.dispose();
                } else {
                    cm.sendNext("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
				
            }else if (beauty == 2) {
                if (cm.haveItem(4250802, selection*5) && cm.haveItem(1122000, selection)&& cm.haveItem(4000463, selection*100)&& cm.haveItem(4251002, selection*5)&& cm.haveItem(4251202, selection*2)&& cm.haveItem(4251402, selection*5)&& cm.haveItem(4250902, selection*5) &&cm.haveItem(4031217, selection) &&cm.haveItem(1052498, selection) && cm.getPlayer().getMeso() >selection*100000000){
					 cm.gainItem(4250802, -selection*5);
					 cm.gainItem(4251002, -selection*5)
					 cm.gainItem(4251402, -selection*5)
					 cm.gainItem(4250902, -selection*5)
					 cm.gainItem(4251202, -selection*2)
					 cm.gainItem(4031217, -selection);
					 cm.gainItem(4000463, -selection*100);
					 cm.gainItem(1052499, -selection);
					 cm.gainItem(1122000, -selection);
					cm.gainMeso(-100000000* selection); //加减金币
					cm.gainItem(1052887, selection);
                    cm.sendNext("合成物品成功！");
					cm.dispose();
                } else {
                    cm.sendNext("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
            }else if (beauty == 3) {
                 if (cm.haveItem(4250802, selection*5) && cm.haveItem(1122000, selection)&& cm.haveItem(4000463, selection*100)&& cm.haveItem(4251002, selection*5)&& cm.haveItem(4251202, selection*2)&& cm.haveItem(4251402, selection*5)&& cm.haveItem(4250902, selection*5) &&cm.haveItem(4031217, selection) &&cm.haveItem(1052498, selection) && cm.getPlayer().getMeso() >selection*100000000){
					 cm.gainItem(4251102, -selection*5);
					 cm.gainItem(4251002, -selection*5)
					 cm.gainItem(4251402, -selection*5)
					 cm.gainItem(4250902, -selection*5)
					 cm.gainItem(4251202, -selection*2)
					 cm.gainItem(4031217, -selection);
					 cm.gainItem(4000463, -selection*100);
					 cm.gainItem(1052500, -selection);
					 cm.gainItem(1122000, -selection);
					cm.gainMeso(-100000000* selection); //加减金币
					cm.gainItem(1052888, selection);
                    cm.sendNext("合成物品成功！");
					cm.dispose();
                } else {
                    cm.sendNext("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
            }else if (beauty == 4) {
                if (cm.haveItem(4250802, selection*5) && cm.haveItem(1122000, selection)&& cm.haveItem(4000463, selection*100)&& cm.haveItem(4251002, selection*5)&& cm.haveItem(4251202, selection*2)&& cm.haveItem(4251402, selection*5)&& cm.haveItem(4250902, selection*5) &&cm.haveItem(4031217, selection) &&cm.haveItem(1052498, selection) && cm.getPlayer().getMeso() >selection*100000000){
					 cm.gainItem(4251002, -selection*5);
					 cm.gainItem(4251002, -selection*5)
					 cm.gainItem(4251402, -selection*5)
					 cm.gainItem(4250902, -selection*5)
					 cm.gainItem(4251202, -selection*2)
					 cm.gainItem(4000463, -selection*100);
					 cm.gainItem(4031217, -selection);
					 cm.gainItem(1052501, -selection);
					 cm.gainItem(1122000, -selection);
					cm.gainMeso(-100000000* selection); //加减金币
					cm.gainItem(1052889, selection);
                    cm.sendNext("合成物品成功！");
					cm.dispose();
                } else {
                    cm.sendNext("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
            }else if (beauty == 5) {
                 if (cm.haveItem(4250802, selection*5) && cm.haveItem(1122000, selection)&& cm.haveItem(4000463, selection*100)&& cm.haveItem(4251002, selection*5)&& cm.haveItem(4251202, selection*2)&& cm.haveItem(4251402, selection*5)&& cm.haveItem(4250902, selection*5) &&cm.haveItem(4031217, selection) &&cm.haveItem(1052498, selection) && cm.getPlayer().getMeso() >selection*100000000){
					 cm.gainItem(4251102, -selection*5);
					 cm.gainItem(4251002, -selection*5)
					 cm.gainItem(4251402, -selection*5)
					 cm.gainItem(4250902, -selection*5)
					 cm.gainItem(4251202, -selection*2)
					 cm.gainItem(4000463, -selection*100);
					 cm.gainItem(4031217, -selection);
					 cm.gainItem(1052502, -selection);
					 cm.gainItem(1122000, -selection);
					cm.gainMeso(-100000000* selection); //加减金币
					cm.gainItem(1052890, selection);
                    cm.sendNext("合成物品成功！");
					cm.dispose();
                } else {
                    cm.sendNext("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
