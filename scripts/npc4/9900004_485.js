var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 大心 = "#fEffect/CharacterEff/1051295/0/0#";
var 琴符 = "#fEffect/CharacterEff/1003252/0/0#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "            "+爱心+" #e萌新每日任务列表#n "+爱心+"\r\n"
			
			if(cm.getBossLog('每日跑商') < 1){
					text += "  #L1#"+爱心+"#e每日跑商  (金币材料混沌祝福卷)(#b可开始#k)#n"+爱心+"#l\r\n"//3
				} else if(cm.getBossLog('每日跑商') == 12){
					text += "  #L1#"+爱心+"#e每日跑商  (金币材料混沌祝福卷)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "  #L1#"+爱心+"#e每日跑商 (金币材料混沌祝福)(#r正在进行#k)#n"+爱心+"#l\r\n"//3
			}
			
			if(cm.getBossLog('每日蘑菇王') == 0){
					if (cm.haveItem(4000040,1)){
						text += "  #L2#"+爱心+"#e每日殴打蘑菇王       (金币50W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
						text += "  #L2#"+爱心+"#e每日殴打蘑菇王       (金币50W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日蘑菇王') == 1){
					text += "  #L2#"+爱心+"#e每日殴打蘑菇王       (金币50W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日僵尸蘑菇王') == 0){
					if (cm.haveItem(4000176,1)){
					text += "  #L3#"+爱心+"#e每日殴打僵尸蘑菇王   (金币50W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L3#"+爱心+"#e每日殴打僵尸蘑菇王   (金币50W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日僵尸蘑菇王') == 1){
					text += "  #L3#"+爱心+"#e每日殴打僵尸蘑菇王   (金币50W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日蓝蘑菇王') == 0){
					if (cm.haveItem(4001010,1)){
					text += "  #L4#"+爱心+"#e每日殴打蓝蘑菇王     (金币50W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L4#"+爱心+"#e每日殴打蓝蘑菇王     (金币50W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日蓝蘑菇王') == 1){
					text += "  #L4#"+爱心+"#e每日殴打蓝蘑菇王     (金币50W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日蜈蚣王') == 0){
					if (cm.haveItem(4031227,1)){
					text += "  #L5#"+爱心+"#e每日殴打蜈蚣王       (金币50W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L5#"+爱心+"#e每日殴打蜈蚣王       (金币50W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日蜈蚣王') == 1){
					text += "  #L5#"+爱心+"#e每日殴打蜈蚣王       (金币50W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日多多') == 0){
					if (cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
					text += "  #L6#"+爱心+"#e每日殴打神殿三Boss  (金币400W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L6#"+爱心+"#e每日殴打神殿三Boss  (金币400W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日多多') == 1){
					text += "  #L6#"+爱心+"#e每日殴打神殿三Boss  (金币300W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日喷火龙') == 0){
					if (cm.haveItem(4000235,1)){
					text += "  #L7#"+爱心+"#e每日殴打喷火龙   (随机金币点券)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L7#"+爱心+"#e每日殴打喷火龙   (随机金币点券)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日喷火龙') == 1){
					text += "  #L7#"+爱心+"#e每日殴打喷火龙   (随机金币点券)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日天鹰') == 0){
					if (cm.haveItem(4000243,1)){
					text += "  #L8#"+爱心+"#e每日殴打天鹰     (随机金币点券)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L8#"+爱心+"#e每日殴打天鹰     (随机金币点券)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日天鹰') == 1){
					text += "  #L8#"+爱心+"#e每日殴打天鹰     (随机金币点券)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日鱼王') == 0){
					if (cm.haveItem(4000175,1)){
					text += "  #L9#"+爱心+"#e每日殴打鱼王        (金币300W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L9#"+爱心+"#e每日殴打鱼王        (金币300W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日鱼王') == 1){
					text += "  #L9#"+爱心+"#e每日殴打鱼王        (金币300W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日老板') == 0){
					if (cm.haveItem(4000094,3)){
					text += "  #L10#"+爱心+"#e每日殴打老板     (钓鱼场一条龙)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L10#"+爱心+"#e每日殴打老板     (钓鱼场一条龙)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日老板') == 1){
					text += "  #L10#"+爱心+"#e每日殴打老板     (钓鱼场一条龙)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日天狗') == 0){
					if (cm.haveItem(4000224,1)){
					text += "  #L11#"+爱心+"#e每日殴打天狗      (混沌卷轴 x2)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L11#"+爱心+"#e每日殴打天狗      (混沌卷轴 x2)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日天狗') == 1){
					text += "  #L11#"+爱心+"#e每日殴打天狗      (混沌卷轴 x2)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('每日大姐大') == 0){
					if (cm.haveItem(4000138,1)){
					text += "  #L12#"+爱心+"#e每日殴打大姐大    (祝福卷轴 x2)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L12#"+爱心+"#e每日殴打大姐大    (祝福卷轴 x2)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('每日大姐大') == 1){
					text += "  #L12#"+爱心+"#e每日殴打大姐大    (祝福卷轴 x2)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9010009, 1);
        } else if (selection == 2) {
		 if (cm.getBossLog('每日蘑菇王') >= 1) {
            cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
	    cm.dispose();
        }else{
			if (cm.haveItem(4000040,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4000040, -1);
				cm.gainMeso(+500000); //加减金币	
				//cm.gainMeso(+2049100); //加减金币	
				cm.喇叭(1,"玩家："+cm.getName()+" 完成每日殴打蘑菇王！奖励金币50W！");
                cm.sendOk("兑换成功！");
            cm.setBossLog('每日蘑菇王');
                cm.dispose();
		}else{
                cm.sendOk("60级以后才可以做本次任务！");
                cm.dispose();
		 }
            }else{
                cm.sendOk("收集#v4000040# 1个交给我！");
                cm.dispose();
            }
		 }
        } else if (selection == 3) {
		 if (cm.getBossLog('每日僵尸蘑菇王') >= 1) {
            cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
	    cm.dispose();
        }else{
			if (cm.haveItem(4000176,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4000176, -1);
				cm.gainMeso(+500000); //加减金币
				//cm.gainMeso(+2049100); //加减金币	
				cm.喇叭(1,"玩家："+cm.getName()+" 完成每日殴打僵尸蘑菇王！奖励金币50W！");
                cm.sendOk("兑换成功！");
            cm.setBossLog('每日僵尸蘑菇王');
                cm.dispose();
		}else{
                cm.sendOk("60级以后才可以做本次任务！");
                cm.dispose();
		 }
            }else{
                cm.sendOk("收集#v4000176# 1个交给我！");
                cm.dispose();
            }
		 }
        } else if (selection == 4) {
			if (cm.getBossLog('每日蓝蘑菇王') >= 1) {
            cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
	    cm.dispose();
        }else{
			if (cm.haveItem(4001010,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4001010, -1);
				cm.gainMeso(+500000); //加减金币
				//cm.gainMeso(+2049100); //加减金币	
				cm.喇叭(1,"玩家："+cm.getName()+" 完成每日殴打蓝蘑菇王！奖励金币50W！");
                cm.sendOk("兑换成功！");
            cm.setBossLog('每日蓝蘑菇王');
                cm.dispose();
		}else{
                cm.sendOk("60级以后才可以做本次任务！");
                cm.dispose();
		 }
            }else{
                cm.sendOk("收集#v4001010# 1个交给我！");
                cm.dispose();
            }
		 }
        } else if (selection == 5) {
					if (cm.getBossLog('每日蜈蚣王') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4031227,1)){
									if (cm.getLevel() > 59){
											cm.gainItem(4031227, -1);
											cm.gainMeso(+1000000); //加减金币
										//cm.gainMeso(+2049100); //加减金币	
											cm.喇叭(1,"玩家："+cm.getName()+" 完成每日击败蜈蚣王！奖励金币100W！");
											cm.sendOk("兑换成功！");
											cm.setBossLog('每日蜈蚣王');
											cm.dispose();
									}else{
											cm.sendOk("60级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4031227# 1个交给我！");
								cm.dispose();
							}
					}
        } else if (selection == 6) {
					if (cm.getBossLog('每日多多') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000460, -1);
											cm.gainItem(4000461, -1);
											cm.gainItem(4000462, -1);
											cm.gainMeso(+4000000); //加减金币
										//cm.gainMeso(+2049100); //加减金币	
											cm.喇叭(1,"玩家："+cm.getName()+" 完成每日击败神殿三Boss！奖励金币400W！");
											cm.sendOk("兑换成功！");
											cm.setBossLog('每日多多');
											cm.dispose();
									}else{
											cm.sendOk("120级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000460##v4000461##v4000462# 各1个交给我！");
								cm.dispose();
							}
					}
        } else if (selection == 7) {
					if (cm.getBossLog('每日喷火龙') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000235,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000235, -1);
											var rand = 0 + Math.floor(Math.random() * 2);  //随机数
											if (rand==0){
											cm.gainMeso(+2000000); //加减金币
											rand="金币200W！";
												}else{
											cm.gainNX(1000);	//加减点券
											rand="点券1000点！"
												var bf="";
											}
										//cm.gainMeso(+2049100); //加减金币	
											cm.喇叭(1,"玩家："+cm.getName()+" 完成每日击败喷火龙！奖励"+rand);
											cm.sendOk("兑换成功！");
											cm.setBossLog('每日喷火龙');
											cm.dispose();
									}else{
											cm.sendOk("120级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000235# 1个交给我！");
								cm.dispose();
							}
					}
        } else if (selection == 8) {
					if (cm.getBossLog('每日天鹰') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000243,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000243, -1);
											var rand = 0 + Math.floor(Math.random() * 2);  //随机数
											if (rand==0){
											cm.gainMeso(+2000000); //加减金币
											rand="金币200W！";
												}else{
											cm.gainNX(1000);	//加减点券
											rand="点券1000点！"
												var bf="";
											}
										//cm.gainMeso(+2049100); //加减金币	
											cm.喇叭(1,"玩家："+cm.getName()+" 完成每日击败喷天鹰！奖励"+rand);
											cm.sendOk("兑换成功！");
											cm.setBossLog('每日天鹰');
											cm.dispose();
									}else{
											cm.sendOk("120级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000243# 1个交给我！");
								cm.dispose();
							}
					}
		} else if (selection == 9) {
					if (cm.getBossLog('每日鱼王') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000175,1)){
									if (cm.getLevel() > 129){
											cm.gainItem(4000175, -1);
											cm.gainMeso(+3000000); //加减金币
										//cm.gainMeso(+2049100); //加减金币	
											cm.喇叭(1,"玩家："+cm.getName()+" 完成每日击败鱼王！奖励金币300W！");
											cm.sendOk("兑换成功！");
											cm.setBossLog('每日鱼王');
											cm.dispose();
									}else{
											cm.sendOk("130级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000175# 1个交给我！");
								cm.dispose();
							}
					}
		} else if (selection == 10) {
					if (cm.getBossLog('每日老板') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000094,3)){
									if (cm.getLevel() > 149){
											cm.gainItem(4000094, -3);
										cm.gainItem(3011000, 1, 1);//椅子
										cm.gainItem(5340001, 1,1);//鱼竿
										cm.gainItem(2300000, 100,1);//鱼饵
										//cm.gainMeso(+2049100); //加减金币	
											cm.喇叭(1,"玩家："+cm.getName()+" 完成每日击败老板！奖励钓鱼场一条龙服务！");
											cm.sendOk("兑换成功！");
											cm.setBossLog('每日老板');
											cm.dispose();
									}else{
											cm.sendOk("150级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000094# 3个交给我！");
								cm.dispose();
							}
					}
		} else if (selection == 11) {
					if (cm.getBossLog('每日天狗') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000224,1)){
									if (cm.getLevel() > 149){
											cm.gainItem(4000224, -1);
											cm.gainItem(2049100, 2);
											cm.喇叭(1,"玩家："+cm.getName()+" 完成每日击败天狗！奖励混沌卷轴x2！");
											cm.sendOk("兑换成功！");
											cm.setBossLog('每日天狗');
											cm.dispose();
									}else{
											cm.sendOk("150级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000224# 1个交给我！");
								cm.dispose();
							}
					}
		} else if (selection == 12) {
					if (cm.getBossLog('每日大姐大') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000138,1)){
									if (cm.getLevel() > 159){
											cm.gainItem(4000138, -1);
											cm.gainItem(2340000, 2);
											cm.喇叭(1,"玩家："+cm.getName()+" 完成每日击败大姐大！奖励祝福卷轴x2！");
											cm.sendOk("兑换成功！");
											cm.setBossLog('每日大姐大');
											cm.dispose();
									}else{
											cm.sendOk("160级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000138# 1个交给我！");
								cm.dispose();
							}
					}
		} 
    }
}






